import css from "./NavigationLink.module.css";

import { NavLink } from "react-router-dom";

export default function NavigationLink({
  to,
  openNewBlank = false,
  children,
}: {
  to: string;
  openNewBlank?: boolean;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${css.link} ${css.active}` : css.link
      }
      target={openNewBlank ? "_blank" : ""}
    >
      {children}
    </NavLink>
  );
}
