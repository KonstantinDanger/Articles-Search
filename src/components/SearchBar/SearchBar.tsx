import css from "./SearchBar.module.css";

import { useId } from "react";
import type { IProps } from "./SearchBar.types";

export default function SearchBar({ onSubmit, onChange, value }: IProps) {
  const inputId = useId();

  return (
    <div>
      <form onSubmit={onSubmit} className={css.searchBar}>
        <label htmlFor={inputId} className={css.label}>
          Введіть тему:
        </label>
        <div className={css.controls}>
          <input
            id={inputId}
            type="text"
            value={value}
            onChange={onChange}
            className={css.input}
          ></input>
          <button className={css.button} type="submit">
            Пошук
          </button>
        </div>
      </form>
    </div>
  );
}
