'use server';

import { prisma } from '@/lib/prisma';
import { Tweet } from '@/types/admin/tweets';
import { TwitterResponse } from '@/types/admin/tweets';

const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
const TWITTER_USER_ID = process.env.TWITTER_USER_ID;
const TWITTER_API_BASE = 'https://api.x.com/2';
const DEFAULT_TWEET_FIELDS =
  'created_at,public_metrics,conversation_id,in_reply_to_user_id';

function validateTwitterConfig() {
  if (!TWITTER_BEARER_TOKEN || !TWITTER_USER_ID) {
    throw new Error('Twitter configuration is incomplete');
  }
}

async function fetchTweetsFromAPI(limit: number = 5): Promise<TwitterResponse> {
  validateTwitterConfig();

  const response = await fetch(
    `${TWITTER_API_BASE}/users/${TWITTER_USER_ID}/tweets?` +
      new URLSearchParams({
        max_results: limit.toString(),
        'tweet.fields': DEFAULT_TWEET_FIELDS,
        exclude: 'retweets',
      }),
    {
      headers: {
        Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch tweets: ${response.status} ${response.statusText}`
    );
  }

  return await response.json();
}

function mapTwitterResponseToTweets(twitterData: TwitterResponse): Tweet[] {
  if (!twitterData.data || twitterData.data.length === 0) {
    return [];
  }

  return twitterData.data.map((tweet) => ({
    id: tweet.id,
    text: tweet.text,
    created_at: tweet.created_at,
    public_metrics: tweet.public_metrics,
    conversation_id: tweet.conversation_id,
    in_reply_to_user_id: tweet.in_reply_to_user_id,
  }));
}

async function saveTweetToDB(tweet: Tweet): Promise<void> {
  await prisma.tweet.upsert({
    where: { id: tweet.id },
    update: {},
    create: {
      id: tweet.id,
      text: tweet.text,
      createdAt: new Date(tweet.created_at),
      retweetCount: tweet.public_metrics.retweet_count,
      replyCount: tweet.public_metrics.reply_count,
      likeCount: tweet.public_metrics.like_count,
      quoteCount: tweet.public_metrics.quote_count,
      conversationId: tweet.conversation_id,
      inReplyToUserId: tweet.in_reply_to_user_id,
    },
  });
}

export async function fetchAllDSCTweets(limit: number = 20): Promise<Tweet[]> {
  try {
    const tweetsData = await fetchTweetsFromAPI(limit);
    const tweets = mapTwitterResponseToTweets(tweetsData);

    // Save tweets to database in parallel
    await Promise.all(tweets.map(saveTweetToDB));

    return tweets;
  } catch (error) {
    console.error('Error fetching tweets:', error);
    throw new Error('Failed to fetch tweets');
  }
}

export async function fetchLatestTweet(): Promise<Tweet | null> {
  try {
    const tweetsData = await fetchTweetsFromAPI(1);
    const tweets = mapTwitterResponseToTweets(tweetsData);

    if (tweets.length === 0) {
      return null;
    }

    await saveTweetToDB(tweets[0]);
    return tweets[0];
  } catch (error) {
    console.error('Error fetching the latest tweet:', error);
    throw new Error('Failed to fetch the latest tweet');
  }
}

export async function getTotalTweetCount(): Promise<number> {
  try {
    return await prisma.tweet.count();
  } catch (error) {
    console.error('Error getting total tweet count:', error);
    throw new Error('Failed to get total tweet count');
  }
}

export async function getTweetsFromDB(): Promise<Tweet[]> {
  try {
    const tweets = await prisma.tweet.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return tweets.map((tweet) => ({
      id: tweet.id,
      text: tweet.text,
      created_at: tweet.createdAt.toISOString(),
      public_metrics: {
        retweet_count: tweet.retweetCount,
        reply_count: tweet.replyCount,
        like_count: tweet.likeCount,
        quote_count: tweet.quoteCount,
      },
      conversation_id: tweet.conversationId || undefined,
      in_reply_to_user_id: tweet.inReplyToUserId || undefined,
    }));
  } catch (error) {
    console.error('Error fetching tweets from DB:', error);
    throw new Error('Failed to fetch tweets from DB');
  }
}

export async function updateFetchedAt(
  type: string,
  date?: Date
): Promise<Date> {
  try {
    const defaultDate = new Date('2025-02-27T21:30:00Z');
    const updateDate = date || defaultDate;

    const result = await prisma.tweetFetchLog.upsert({
      where: { type },
      update: date ? { fetchedAt: date } : {},
      create: { type, fetchedAt: updateDate },
    });

    return result.fetchedAt;
  } catch (error) {
    console.error('Error updating fetchedAt:', error);
    throw new Error('Failed to update fetchedAt');
  }
}
