import Checkbox from "./Checkbox";
import Label from "./Label";
import { TItem } from "../lib/types";

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
    return (
        <ul className="item-list">
            {items &&
                items.map(({ id, name, isCompleted }) => {
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
