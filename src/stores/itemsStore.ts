import { create } from "zustand";
import { INITIAL_ITEM_LIST } from "../lib/constants";
import { TItem } from "../lib/types";
import { persist } from "zustand/middleware";

type TItemsStore = {
    items: TItem[];
    checkboxChange: (id: number) => void;
    removeItem: (id: number) => void;
    addItem: (name: string) => void;
    markAllAsComplete: () => void;
    markAllAsInComplete: () => void;
    resetToInitial: () => void;
    removeAllItems: () => void;
};

export const useItemsStore = create<TItemsStore>()(
    persist(
        (set) => ({
            items: INITIAL_ITEM_LIST,
            checkboxChange: (id: number) =>
                set((state) => {
                    const items = state.items.map((item) => {
                        if (item.id === id) {
                            return { ...item, isCompleted: !item.isCompleted };
                        }
                        return item;
                    });

                    return { items: items };
                }),
            removeItem: (id: number) =>
                set((state) => {
                    const items = state.items.filter((item) => item.id !== id);
                    return { items: items };
                }),
            addItem: (name: string) =>
                set((state) => {
                    const item = {
                        id: new Date().getMilliseconds(),
                        name,
                        isCompleted: false,
                    };

                    return { items: [item, ...state.items] };
                }),
            markAllAsComplete: () =>
                set((state) => {
                    const items = state.items.map((item) => ({ ...item, isCompleted: true }));
                    return { items: items };
                }),
            markAllAsInComplete: () =>
                set((state) => {
                    const items = state.items.map((item) => ({ ...item, isCompleted: false }));
                    return { items: items };
                }),
            resetToInitial: () => set({ items: INITIAL_ITEM_LIST }),
            removeAllItems: () => set({ items: [] }),
        }),
        {
            name: "items",
        }
    )
);
