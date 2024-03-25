import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
    const numberOfItemsPacked = useItemsStore((state) => state.items.filter((item) => item.isCompleted).length);
    const totalNumberOfItems = useItemsStore((state) => state.items.length);

    return (
        <header>
            <Logo />
            <Counter numberOfItemsPacked={numberOfItemsPacked} totalNumberOfItems={totalNumberOfItems} />
        </header>
    );
}
