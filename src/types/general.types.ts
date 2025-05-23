export interface IArticleList {
  message: {
    items: IArticle[];
    ["total-results"]: number;
  };
}

export interface IArticle {
  DOI: string;
  URL: string;
  title: string[];
  created: { dateTime: string };
}
