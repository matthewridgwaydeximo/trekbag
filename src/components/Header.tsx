import useItemsContext from "../lib/hooks/useItemsContext";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
    const { numberOfItemsPacked, totalNumberOfItems } = useItemsContext();

    return (
        <header>
            <Logo />
            <Counter numberOfItemsPacked={numberOfItemsPacked} totalNumberOfItems={totalNumberOfItems} />
        </header>
    );
}
