import Article from "../Article/Article";
import type { IProps } from "./ArticleList.types";

export default function ArticleList({ articles }: IProps) {
  return (
    <>
      <ul>
        {articles.message?.items.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </ul>
    </>
  );
}
