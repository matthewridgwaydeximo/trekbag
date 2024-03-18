import { TCounterProps } from "../lib/types";

export default function Counter({ numberOfItemsPacked, totalNumberOfItems }: TCounterProps) {
    return (
        <p>
            <strong>{numberOfItemsPacked}</strong>/{totalNumberOfItems} items packed
        </p>
    );
}
