import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Main from "./Main";
import { useSecondaryEvents } from "../lib/hooks/useSecondaryEvents";

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
            <Main items={items} handleAddItem={handleAddItem} handleSecondaryEvents={secondaryEvents} />
            <Footer />
        </>
    );
}
