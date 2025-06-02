import type { IProps } from "./ArticleList.types";
import Article from "../Article/Article";
import css from "./ArticleList.module.css";

export default function ArticleList({ articles }: IProps) {
  return (
    <ul className={css.list}>
      {articles.message?.items.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </ul>
  );
}
