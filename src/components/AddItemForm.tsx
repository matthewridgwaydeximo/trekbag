import { useRef, useState } from "react";
import Button from "./Button";
import { IsNullOrEmpty } from "../lib/helper";

type AddItemFormProps = {
    onAddItem: (name: string) => void;
};

export default function AddItemForm({ onAddItem }: AddItemFormProps) {
    const [item, setItem] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setItem(text);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (IsNullOrEmpty(item)) {
            alert("Please enter an item to add to the list.");
            inputRef.current?.focus();
            return;
        }

        onAddItem(item);
        setItem("");
        inputRef.current?.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add an item</h2>
            <input ref={inputRef} type="text" placeholder="Toothbrush" value={item} onChange={handleItemChange} autoFocus />
            <Button isPrimary={true}>Add to list</Button>
        </form>
    );
}
