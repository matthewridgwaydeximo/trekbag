import Button from "./Button";
import { TButton } from "../lib/types";
import { TSecondaryEvents } from "../lib/types";

type ButtonGroupOptionsType = TButton[];

type TButtonGroupProps = {
    onSecondaryEvents: TSecondaryEvents | undefined;
};

export default function ButtonGroup({ onSecondaryEvents }: TButtonGroupProps) {
    const buttonGroupOptions: ButtonGroupOptionsType = [
        {
            text: "Mark all as complete",
            onClick: onSecondaryEvents?.onMarkAllAsComplete,
        },
        {
            text: "Mark all as incomplete",
            onClick: onSecondaryEvents?.onMarkAllAsInComplete,
        },
        {
            text: "Reset to initial",
            onClick: onSecondaryEvents?.onResetToInitial,
        },
        {
            text: "Remove all items",
            onClick: onSecondaryEvents?.onRemoveAllItems,
        },
    ];

    return (
        <section className="button-group">
            {buttonGroupOptions.map(({ text, onClick }) => (
                <Button key={text} onClick={onClick}>
                    {text}
                </Button>
            ))}
        </section>
    );
}
