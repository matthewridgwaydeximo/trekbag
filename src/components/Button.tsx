import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
    isPrimary?: boolean;
    children: React.ReactNode;
};

export default function Button({ isPrimary = false, children, ...props }: ButtonProps) {
    return (
        <button className={`btn ${!isPrimary ? "btn--secondary" : ""}`} {...props}>
            {children}
        </button>
    );
}
