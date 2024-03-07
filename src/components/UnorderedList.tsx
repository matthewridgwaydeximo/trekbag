import Checkbox from "./Checkbox";
import Label from "./Label";

type UnorderedListProps = {
    items: { name: string; isCompleted: boolean }[] | undefined;
};

type ItemProps = {
    children: React.ReactNode;
};

export default function UnorderedList({ items }: UnorderedListProps) {
    return (
        <ul>
            {items &&
                items.map(({ name }) => {
                    return (
                        <Item key={name}>
                            <Label>
                                <Checkbox />
                                {name}
                            </Label>
                        </Item>
                    );
                })}
        </ul>
    );
}

function Item({ children }: ItemProps) {
    return <li className="item">{children}</li>;
}
