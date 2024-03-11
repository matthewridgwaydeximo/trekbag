import { ComponentPropsWithRef } from "react";

type CheckboxProps = ComponentPropsWithRef<"input">;

export default function Checkbox({ ...props }: CheckboxProps) {
    return <input type="checkbox" {...props} />;
}
