import axios from "axios";
import type { IArticleList } from "../types/general.types";

axios.defaults.baseURL = "https://api.crossref.org";

export const articlesPerPage = 20;
export const maxPaginationResults = 10000;

export async function fetchArticles(
  query: string,
  page = 1
): Promise<IArticleList> {
  // eslint-disable-next-line no-useless-catch
  try {
    const pageOffset = articlesPerPage * page;

    const response = await axios.get<IArticleList>("/works", {
      params: {
        query: query,
        rows: articlesPerPage,
        offset: pageOffset,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
