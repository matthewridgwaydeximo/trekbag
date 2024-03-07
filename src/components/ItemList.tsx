import UnorderedList from "./UnorderedList";

type InitialItemList = {
    id: number;
    name: string;
    isCompleted: boolean;
}[];

const initialItemList: InitialItemList = [
    { id: 1, name: "good mood", isCompleted: true },
    { id: 2, name: "passport", isCompleted: false },
    { id: 3, name: "phone charger", isCompleted: false },
];

export default function ItemList() {
    return <UnorderedList items={initialItemList} />;
}
