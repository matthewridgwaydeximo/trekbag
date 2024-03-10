import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { TItem } from "../lib/types";

type TMainProps = {
    items: TItem[] | undefined;
    handleAddItem: (item: string) => void;
};

export default function Main({ items, handleAddItem }: TMainProps) {
    return (
        <main>
            <Header />
            <ItemList items={items} />
            <Sidebar handleAddItem={handleAddItem} />
        </main>
    );
}
