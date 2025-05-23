import { NavLink } from "react-router-dom";
import type { IProps } from "./ReturnButton.types";

export default function ReturnButton({ to, text }: IProps) {
  return <NavLink to={to}>{text}</NavLink>;
}
