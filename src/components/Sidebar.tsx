import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { TSecondaryEvents } from "../lib/types";

type TSidebarProps = {
    handleAddItem: (item: string) => void;
    handleSecondaryEvents: TSecondaryEvents | undefined;
};

export default function Sidebar({ handleAddItem, handleSecondaryEvents }: TSidebarProps) {
    return (
        <div className="sidebar">
            <AddItemForm onAddItem={handleAddItem} />
            <ButtonGroup onSecondaryEvents={handleSecondaryEvents} />
        </div>
    );
}
