import { TButton, TSecondaryEvents } from "../types";

type ButtonGroupOptionsType = TButton[];

type TButtonGroupProps = {
    onSecondaryEvents: TSecondaryEvents | undefined;
};

export function useButtonGroup({ onSecondaryEvents }: TButtonGroupProps) {
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

    return {
        buttonGroupOptions,
    };
}
