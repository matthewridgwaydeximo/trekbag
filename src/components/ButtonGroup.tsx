import Button from "./Button";
import { useButtonGroup } from "../lib/hooks/useButtonGroup";
import { useItemsStore } from "../stores/itemsStore";
import { TSecondaryEvents } from "../lib/types";

export default function ButtonGroup() {
    const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
    const markAllAsInComplete = useItemsStore((state) => state.markAllAsInComplete);
    const resetToInitial = useItemsStore((state) => state.resetToInitial);
    const removeAllItems = useItemsStore((state) => state.removeAllItems);

    const secondaryEvents: TSecondaryEvents = {
        onMarkAllAsComplete: markAllAsComplete,
        onMarkAllAsInComplete: markAllAsInComplete,
        onResetToInitial: resetToInitial,
        onRemoveAllItems: removeAllItems,
    };

    const { buttonGroupOptions } = useButtonGroup({ onSecondaryEvents: secondaryEvents });

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
