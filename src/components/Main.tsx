import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { TItem, TSecondaryEvents } from "../lib/types";

type TMainProps = {
    items: TItem[] | undefined;
    handleAddItem: (item: string) => void;
    handleSecondaryEvents: TSecondaryEvents | undefined;
};

export default function Main({ items, handleAddItem, handleSecondaryEvents }: TMainProps) {
    return (
        <main>
            <Header />
            <ItemList items={items} />
            <Sidebar handleAddItem={handleAddItem} handleSecondaryEvents={handleSecondaryEvents} />
        </main>
    );
}
