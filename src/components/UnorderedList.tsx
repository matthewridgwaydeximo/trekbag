import Checkbox from "./Checkbox";
import Label from "./Label";
import { TItem } from "../lib/types";
import { INITIAL_ITEM_LIST } from "../lib/constants";

type UnorderedListProps = {
    items: TItem[] | undefined;
};

type ItemProps = {
    children: React.ReactNode;
};

export default function UnorderedList({ items = INITIAL_ITEM_LIST }: UnorderedListProps) {
    return (
        <ul>
            {items &&
                items.map(({ id, name }) => {
                    return (
                        <Item key={id}>
                            <Label>
                                <Checkbox />
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
