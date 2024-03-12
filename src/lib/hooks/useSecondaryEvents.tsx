import { useState } from "react";
import { INITIAL_ITEM_LIST } from "../constants";
import { TSecondaryEvents } from "../types";

export function useSecondaryEvents() {
    const [items, setItems] = useState(INITIAL_ITEM_LIST);

    const handleMarkAllAsComplete = () => {
        setItems((prev) => prev.map((item) => ({ ...item, isCompleted: true })));
    };

    const handleMarkAllAsInComplete = () => {
        setItems((prev) => prev.map((item) => ({ ...item, isCompleted: false })));
    };

    const handleResetToInitial = () => {
        setItems(INITIAL_ITEM_LIST);
    };

    const handleRemoveAllItems = () => {
        setItems([]);
    };

    const secondaryEvents: TSecondaryEvents = {
        onMarkAllAsComplete: handleMarkAllAsComplete,
        onMarkAllAsInComplete: handleMarkAllAsInComplete,
        onResetToInitial: handleResetToInitial,
        onRemoveAllItems: handleRemoveAllItems,
    };

    return {
        items,
        setItems,
        secondaryEvents,
    };
}
