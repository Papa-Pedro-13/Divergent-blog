export interface Article {
  id: number;
  title: string;
  short_description: string;
  author: string;
  publish_date: string;
  word_count: number;
  topic: string;
  language: string;
  source: string;
  keywords: string;
  sentiment_score: number;
  read_time_minutes: number;
  content: string;
  comment: string;
  comments_name: string;
}
export type StoreType = {
  articles: ArticlesInitState;
};
export type ArticlesInitState = {
  list: Article[];
  filtered: Article[];
  isLoading: boolean;
};
