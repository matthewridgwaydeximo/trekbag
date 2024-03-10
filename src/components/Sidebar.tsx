import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

type TSidebarProps = {
    handleAddItem: (item: string) => void;
};

export default function Sidebar({ handleAddItem }: TSidebarProps) {
    return (
        <div className="sidebar">
            <AddItemForm onAddItem={handleAddItem} />
            <ButtonGroup />
        </div>
    );
}
