import NavigationLink from "../NavigationLink/NavigationLink";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <div className={css.appBar}>
      <NavigationLink to="/">Домашня сторінка</NavigationLink>
      <NavigationLink to="/search">Пошук статей</NavigationLink>
    </div>
  );
}
