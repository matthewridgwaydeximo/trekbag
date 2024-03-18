import { TCounterProps } from "../lib/types";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ numberOfItemsPacked, totalNumberOfItems }: TCounterProps) {
    return (
        <header>
            <Logo />
            <Counter numberOfItemsPacked={numberOfItemsPacked} totalNumberOfItems={totalNumberOfItems} />
        </header>
    );
}
