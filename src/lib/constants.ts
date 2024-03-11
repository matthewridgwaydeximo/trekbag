import { TItem } from "../lib/types";

export const INITIAL_ITEM_LIST: TItem[] = [
    { id: 1, name: "good mood", isCompleted: true },
    { id: 2, name: "passport", isCompleted: false },
    { id: 3, name: "phone charger", isCompleted: false },
] as const;
