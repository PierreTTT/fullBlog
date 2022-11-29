export interface IPost {
  title: string;
  image: string;
  description: string;
  date: string;
  slug: string;
}

export interface IMarkdown {
  date: string;
  isFeatured: boolean;
  title: string;
  image: string;
  description: string;
}
export interface IPostData {
  content: string;
  slug: string;
}
