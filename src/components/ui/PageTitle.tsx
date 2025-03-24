import { JSX } from "react";

type Props = { title: string };

export default function PageTitle(props: Props): JSX.Element {
  return <h1 className="h2 mb-3 fw-normal">{props.title}</h1>;
}
