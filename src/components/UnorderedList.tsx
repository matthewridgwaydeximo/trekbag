import Checkbox from "./Checkbox";
import Label from "./Label";
import { TItem } from "../lib/types";

type UnorderedListProps = {
    items: TItem[] | undefined;
    onCheckboxChange: (id: number) => void;
};

type ItemProps = {
    children: React.ReactNode;
};

export default function UnorderedList({ items, onCheckboxChange }: UnorderedListProps) {
    return (
        <ul>
            {items &&
                items.map(({ id, name, isCompleted }) => {
                    return (
                        <Item key={id}>
                            <Label>
                                <Checkbox checked={isCompleted} onChange={() => onCheckboxChange(id)} />
                                {name}
                            </Label>
                            <RemoveButton />
                        </Item>
                    );
                })}
        </ul>
    );
}

function Item({ children }: ItemProps) {
    return <li className="item">{children}</li>;
}

function RemoveButton() {
    return <button>❌</button>;
}
