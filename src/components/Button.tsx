import { ComponentProps } from "react";

type ButtonAdditionalProps = {
    isPrimary?: boolean;
    children: React.ReactNode;
};

type ButtonProps = ComponentProps<"button"> & ButtonAdditionalProps;

export default function Button({ isPrimary = false, children, ...props }: ButtonProps) {
    return (
        <button className={`btn ${!isPrimary ? "btn--secondary" : ""}`} {...props}>
            {children}
        </button>
    );
}
