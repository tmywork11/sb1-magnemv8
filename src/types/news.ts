export interface NewsItemType {
  id?: string;
  date: string;
  category: string;
  title: string;
  content?: string;
  link?: string;
}

export interface NewsResponse extends BaseResponse {
  data: NewsItemType[];
}