import type { FormEvent, ChangeEvent } from "react";

export interface IProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
