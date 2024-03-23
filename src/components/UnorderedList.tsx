import Checkbox from "./Checkbox";
import Label from "./Label";
import { TItem } from "../lib/types";
import { IsNullOrEmpty } from "../lib/helper";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { SELECT_OPTIONS } from "../lib/constants";
import { useMemo, useState } from "react";

type TUnorderedListProps = {
    items: TItem[] | undefined;
    onCheckboxChange: (id: number) => void;
    handleRemoveItem: (id: number) => void;
};

type TItemProps = {
    children: React.ReactNode;
};

type TRemoveButtonProps = {
    id: number;
    onRemoveItem: (id: number) => void;
};

export default function UnorderedList({ items, onCheckboxChange, handleRemoveItem }: TUnorderedListProps) {
    const [sortBy, setSortBy] = useState<string | undefined>("default");

    const [defaultValue] = SELECT_OPTIONS;

    const sortedItems = useMemo(() => {
        return Object.assign([], items).sort((a: TItem, b: TItem) => {
            if (sortBy === "packed") {
                return Number(b.isCompleted) - Number(a.isCompleted);
            }

            if (sortBy === "unpacked") {
                return Number(a.isCompleted) - Number(b.isCompleted);
            }

            return 0;
        });
    }, [items, sortBy]);

    return (
        <ul className="item-list">
            {IsNullOrEmpty(sortedItems) && <EmptyView />}

            {!IsNullOrEmpty(sortedItems) && (
                <section className="sorting">
                    <Select options={SELECT_OPTIONS} onChange={(e) => setSortBy(e?.value)} defaultValue={defaultValue} />
                </section>
            )}

            {sortedItems &&
                sortedItems.map(({ id, name, isCompleted }) => {
                    return (
                        <Item key={id}>
                            <Label>
                                <Checkbox checked={isCompleted} onChange={() => onCheckboxChange(id)} />
                                {name}
                            </Label>
                            <RemoveButton id={id} onRemoveItem={handleRemoveItem} />
                        </Item>
                    );
                })}
        </ul>
    );
}

function Item({ children }: TItemProps) {
    return <li className="item">{children}</li>;
}

function RemoveButton({ id, onRemoveItem }: TRemoveButtonProps) {
    return <button onClick={() => onRemoveItem(id)}>❌</button>;
}
