import SearchBar from "../../components/SearchBar/SearchBar";
import ArticleList from "../../components/ArticleList/ArticleList";
import css from "./SearchPage.module.css";

import type { IArticleList } from "../../types/general.types";
import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  articlesPerPage,
  fetchArticles,
  maxPaginationResults,
} from "../../api/topics-api";
import { Pagination } from "react-pagination-bar";

export default function SearchPage() {
  const [query, setQuery] = useState<string>("");
  const [prevQuery, setPrevQuery] = useState<string>("");
  const [page, setPage] = useState(1);
  const [notFoundArticles, setNotFoundArticles] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<IArticleList>({
    message: {
      items: [],
      ["total-results"]: 0,
    },
  });

  const getArticles = async (query: string, currentPage: number) => {
    try {
      setIsLoading(true);

      const fetchedArticles = await fetchArticles(query, currentPage);

      if (articles?.message?.["total-results"] > maxPaginationResults) {
        articles.message["total-results"] = maxPaginationResults;
      }

      console.log("totalresults", articles.message["total-results"]);
      console.log("items amount", fetchedArticles.message.items.length);

      if (fetchedArticles.message?.items.length === 0) {
        setNotFoundArticles(true);
        return;
      }

      setNotFoundArticles(false);
      setArticles(fetchedArticles);
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      query.trim() === "" ||
      query.trim().toLocaleLowerCase() === prevQuery.trim().toLocaleLowerCase()
    ) {
      return;
    }

    if (prevQuery !== query) {
      setPage(1);
    }

    setPrevQuery(query);
    await getArticles(query, page);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handlePageChange = async (pageNum: number) => {
    if (page === pageNum) {
      return;
    }

    await getArticles(query, pageNum);
    setPage(pageNum);
  };

  return (
    <div className={css.container}>
      <SearchBar
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        value={query}
      />
      {isLoading ? (
        <div className={css.loading}>Завантаження даних з серверу...</div>
      ) : articles.message.items.length !== 0 ? (
        <div>
          <ArticleList articles={articles} />
        </div>
      ) : (
        notFoundArticles && (
          <div className={css.noResults}>
            Статей на тему "{prevQuery}" не знайдено
          </div>
        )
      )}
      {articles.message.items.length !== 0 && (
        <Pagination
          customClassNames={{
            rpbRootClassName: css.customRoot,
            rpbProgressClassName: css.customProgressBar,
            rpbItemClassNameActive: css.customItemActive,
            rpbItemClassNameDisable: css.customItemDisable,
          }}
          currentPage={page}
          itemsPerPage={articlesPerPage}
          startLabel={"<<"}
          endLabel={">>"}
          nextLabel={">"}
          prevLabel={"<"}
          pageNeighbours={2}
          totalItems={articles.message["total-results"] / articlesPerPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
