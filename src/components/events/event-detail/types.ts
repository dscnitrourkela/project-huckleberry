export interface EventData {
  id: string;
  coverImage: string | null;
  title: string;
  subTitle: string | null;
  description: string;
  location: string | null;
  mode: string;
  eligibility: string;
  timestamp: string;
}
