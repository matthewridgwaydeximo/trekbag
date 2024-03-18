export type TItem = {
    id: number;
    name: string;
    isCompleted: boolean;
};

export type TButton = {
    text: string;
    onClick?: () => void;
};

export type TSecondaryEvents = {
    onMarkAllAsComplete: () => void;
    onMarkAllAsInComplete: () => void;
    onResetToInitial: () => void;
    onRemoveAllItems: () => void;
};

export type TCounterProps = {
    numberOfItemsPacked: number;
    totalNumberOfItems: number;
};
