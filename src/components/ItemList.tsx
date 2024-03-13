import UnorderedList from "./UnorderedList";
import { TItem } from "../lib/types";

type ItemListProps = {
    items: TItem[] | undefined;
    handleCheckboxChange: (id: number) => void;
};

export default function ItemList({ items, handleCheckboxChange }: ItemListProps) {
    return <UnorderedList items={items} onCheckboxChange={handleCheckboxChange} />;
}
