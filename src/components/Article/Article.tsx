import NavigationLink from "../NavigationLink/NavigationLink";
import type { IProps } from "./Article.types";

export default function Article({ article }: IProps) {
  if (!article?.title?.[0]) {
    return null;
  }

  return (
    <li>
      <NavigationLink to={article.URL} openNewBlank={true}>
        <div>{article?.title?.[0]}</div>
      </NavigationLink>
    </li>
  );
}
