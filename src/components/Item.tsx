import { ComponentProps } from "react";

type ItemProps = {
    children: React.ReactNode;
};

export default function Item({ children }: ItemProps) {
    return <li className="item">{children}</li>;
}
