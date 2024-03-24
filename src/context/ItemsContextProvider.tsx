import { createContext, ReactNode } from "react";
import { useSecondaryEvents } from "../lib/hooks/useSecondaryEvents";
import { TItem, TSecondaryEvents } from "../lib/types";

export const ItemsContext = createContext<{
    items: TItem[] | undefined;
    numberOfItemsPacked: number;
    totalNumberOfItems: number;
    handleAddItem: (name: string) => void;
    handleCheckboxChange: (id: number) => void;
    handleRemoveItem: (id: number) => void;
    secondaryEvents: TSecondaryEvents;
} | null>(null);

export default function ItemsContextProvider({ children }: { children: ReactNode }) {
    const { items, setItems, secondaryEvents } = useSecondaryEvents();

    const numberOfItemsPacked = items.filter((item) => item.isCompleted).length;
    const totalNumberOfItems = items.length;

    const handleAddItem = (name: string) => {
        const item = {
            id: new Date().getMilliseconds(),
            name: name,
            isCompleted: false,
        };
        setItems((prev) => [item, ...prev]);
    };

    const handleCheckboxChange = (id: number) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    return { ...item, isCompleted: !item.isCompleted };
                }
                return item;
            })
        );
    };

    const handleRemoveItem = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <ItemsContext.Provider
            value={{
                items,
                numberOfItemsPacked,
                totalNumberOfItems,
                handleAddItem,
                handleCheckboxChange,
                handleRemoveItem,
                secondaryEvents,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
}
