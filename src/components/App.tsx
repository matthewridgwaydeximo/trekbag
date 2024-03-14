import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Main from "./Main";
import { useSecondaryEvents } from "../lib/hooks/useSecondaryEvents";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import UnorderedList from "./UnorderedList";

export default function App() {
    const { items, setItems, secondaryEvents } = useSecondaryEvents();

    console.log("test" === new String("test"));

    const handleAddItem = (name: string) => {
        const item = {
            id: new Date().getMilliseconds(),
            name: name,
            isCompleted: false,
        };
        setItems((prev) => [item, ...prev]);
    };

    const handleCheckboxChange = (id: number) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    return { ...item, isCompleted: !item.isCompleted };
                }
                return item;
            })
        );
    };

    const handleRemoveItem = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <>
            <BackgroundHeading />
            <Main>
                <Header />
                <UnorderedList items={items} onCheckboxChange={handleCheckboxChange} handleRemoveItem={handleRemoveItem} />;
                <Sidebar>
                    <AddItemForm onAddItem={handleAddItem} />
                    <ButtonGroup onSecondaryEvents={secondaryEvents} />
                </Sidebar>
            </Main>
            <Footer />
        </>
    );
}
