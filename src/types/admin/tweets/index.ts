export interface Tweet {
  id: string;
  text: string;
  created_at: string;
  public_metrics: {
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
  };
  conversation_id?: string;
  in_reply_to_user_id?: string;
}

export interface TweetCardProps {
  tweet: {
    id: string;
    text: string;
    created_at: string;
    public_metrics: {
      retweet_count: number;
      reply_count: number;
      like_count: number;
      quote_count: number;
    };
    username?: string;
    displayname?: string;
    avatarUrl?: string;
  };
}

export interface TwitterResponse {
  data: {
    id: string;
    text: string;
    created_at: string;
    public_metrics: {
      retweet_count: number;
      reply_count: number;
      like_count: number;
      quote_count: number;
    };
    conversation_id: string;
    in_reply_to_user_id?: string;
  }[];
  meta: {
    result_count: number;
    next_token?: string;
  };
}
