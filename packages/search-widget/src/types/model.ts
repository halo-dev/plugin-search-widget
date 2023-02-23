export interface Hit {
  name: string;
  title: string;
  content: string;
  publishTimestamp: string;
  permalink: string;
}

export interface Result {
  hits: Hit[];
  keyword: string;
  total: number;
  limit: number;
  processingTimeMills: number;
}
