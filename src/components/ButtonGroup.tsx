import Button from "./Button";
import { TButton } from "../lib/types";
import { BUTTON_GROUP_OPTIONS_TYPE } from "../lib/constants";

type ButtonGroupOptionsType = TButton[];

const buttonGroupOptions: ButtonGroupOptionsType = BUTTON_GROUP_OPTIONS_TYPE;

export default function ButtonGroup() {
    return (
        <section className="button-group">
            {buttonGroupOptions.map(({ text }) => (
                <Button key={text}>{text}</Button>
            ))}
        </section>
    );
}
