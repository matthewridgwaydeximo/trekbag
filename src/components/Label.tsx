import { ComponentProps } from "react";

type LabelProps = ComponentProps<"label"> & {
    children: React.ReactNode;
};

export default function Label({ children, ...props }: LabelProps) {
    return <label {...props}>{children}</label>;
}
