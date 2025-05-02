import { toast } from 'sonner';
import {
  getTotalTweetCount,
  fetchAllDSCTweets,
  fetchLatestTweet,
  getTweetsFromDB,
  updateFetchedAt,
} from '@/actions/tweets';
import { Tweet } from '@/types/admin/tweets';

// Check if enough time has passed since last fetch (2 hours)
export const canFetchTweets = (lastFetchedTimestamp: Date | null): boolean => {
  if (!lastFetchedTimestamp) return true;

  const now = new Date();
  const timeDifference = now.getTime() - lastFetchedTimestamp.getTime();
  const hoursDifference = timeDifference / (1000 * 60 * 60);

  return hoursDifference >= 2;
};

// Fetch tweet count from database
export const fetchTweetCount = async (): Promise<number> => {
  try {
    const count = await getTotalTweetCount();
    return count;
  } catch (error) {
    console.error('Error fetching tweet count:', error);
    return 0;
  }
};

// Fetch tweets from database
export const fetchTweetsFromDB = async (): Promise<Tweet[]> => {
  try {
    const tweets = await getTweetsFromDB();
    return tweets;
  } catch (error) {
    console.error('Error fetching tweets from DB:', error);
    return [];
  }
};

// Update the last fetched date
export const handleUpdateFetchedAt = async (
  type: string,
  date?: Date
): Promise<Date | null> => {
  try {
    const fetchedDate = await updateFetchedAt(type, date);
    // const formattedDate = new Date(fetchedDate).toLocaleString('en-GB', {
    //   year: 'numeric',
    //   month: 'numeric',
    //   day: 'numeric',
    //   hour: 'numeric',
    //   minute: 'numeric',
    //   second: 'numeric',
    //   hour12: true,
    // });
    return fetchedDate;
  } catch (error) {
    console.error('Error updating fetchedAt:', error);
    return null;
  }
};

// Display error toast for rate limiting
export const showRateLimitError = (lastFetchedTimestamp: Date | null): void => {
  const timeRemaining =
    2 -
    (new Date().getTime() - (lastFetchedTimestamp?.getTime() || 0)) /
      (1000 * 60 * 60);
  const minutesRemaining = Math.ceil(timeRemaining * 60);

  toast.error(
    `Please wait before fetching more tweets. You can fetch again in approximately ${minutesRemaining} minutes.`,
    {
      duration: 5000,
    }
  );
};

// Handle fetching latest tweet
export const handleFetchLatestTweet = async (
  lastFetchedTimestamp: Date | null,
  setIsLoading: (isLoading: boolean) => void,
  onSuccess: () => void
): Promise<void> => {
  // Check if enough time has passed since last fetch
  if (!canFetchTweets(lastFetchedTimestamp)) {
    showRateLimitError(lastFetchedTimestamp);
    return;
  }

  setIsLoading(true);
  try {
    // Fetch latest tweet
    await fetchLatestTweet();
    toast.success('Latest tweet fetched successfully!', {
      duration: 3000,
    });

    // Call the success callback
    onSuccess();
  } catch (error) {
    console.error('Error fetching latest tweet:', error);
    toast.error('Failed to fetch latest tweet. Please try again later.', {
      duration: 5000,
    });
  } finally {
    setIsLoading(false);
  }
};

// Handle fetching all DSC tweets
export const handleFetchAllDSCTweets = async (
  lastFetchedTimestamp: Date | null,
  setIsLoading: (isLoading: boolean) => void,
  onSuccess: () => void
): Promise<void> => {
  // Check if enough time has passed since last fetch
  if (!canFetchTweets(lastFetchedTimestamp)) {
    showRateLimitError(lastFetchedTimestamp);
    return;
  }

  setIsLoading(true);
  try {
    // Actually fetch the tweets
    await fetchAllDSCTweets(20); // pass the limit of 20
    toast.success('Successfully fetched the latest 20 tweets!', {
      duration: 3000,
    });

    // Call the success callback
    onSuccess();
  } catch (error) {
    console.error('Error fetching all DSC tweets:', error);
    toast.error('Failed to fetch tweets. Please try again later.', {
      duration: 5000,
    });
  } finally {
    setIsLoading(false);
  }
};
