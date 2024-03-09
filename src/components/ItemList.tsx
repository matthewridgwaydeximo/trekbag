import UnorderedList from "./UnorderedList";
import { TItem } from "../lib/types";

type ItemListProps = {
    items: TItem[] | undefined;
};

export default function ItemList({ items }: ItemListProps) {
    return <UnorderedList items={items} />;
}
