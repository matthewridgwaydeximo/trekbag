import { useEffect, useState } from "react";
import { INITIAL_ITEM_LIST } from "../constants";
import { TItem, TSecondaryEvents } from "../types";
import { IsNullOrEmpty } from "../helper";

export function useSecondaryEvents() {
    const itemsFromLocalStorage: TItem[] = JSON.parse(localStorage.getItem("items") || "[]");
    const [items, setItems] = useState(() => (IsNullOrEmpty(itemsFromLocalStorage) ? INITIAL_ITEM_LIST : itemsFromLocalStorage));

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

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
