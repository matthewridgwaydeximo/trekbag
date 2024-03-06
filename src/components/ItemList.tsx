import Checkbox from "./Checkbox";
import Item from "./Item";
import Label from "./Label";
import UnorderedList from "./UnorderedList";

type InitialItemList = {
    id: number;
    name: string;
    isCompleted: boolean;
}[];

const initialItemList: InitialItemList = [
    { id: 1, name: "First item", isCompleted: true },
    { id: 2, name: "Second item", isCompleted: false },
    { id: 3, name: "Third item", isCompleted: false },
];

export default function ItemList() {
    return (
        <UnorderedList>
            {initialItemList.map(({ id, name }) => (
                <Item key={id}>
                    <Label>
                        <Checkbox />
                        {name}
                    </Label>
                </Item>
            ))}
        </UnorderedList>
    );
}
