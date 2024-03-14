import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Main from "./Main";
import { useSecondaryEvents } from "../lib/hooks/useSecondaryEvents";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function App() {
    const { items, setItems, secondaryEvents } = useSecondaryEvents();

    const handleAddItem = (name: string) => {
        const item = {
            id: new Date().getMilliseconds(),
            name: name,
            isCompleted: false,
        };
        setItems((prev) => [item, ...prev]);
    };

    return (
        <>
            <BackgroundHeading />
            <Main>
                <Header />
                <ItemList items={items} />
                <Sidebar>
                    <AddItemForm onAddItem={handleAddItem} />
                    <ButtonGroup onSecondaryEvents={secondaryEvents} />
                </Sidebar>
            </Main>
            <Footer />
        </>
    );
}
