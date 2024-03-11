import { useEffect, useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Main from "./Main";
import { INITIAL_ITEM_LIST } from "../lib/constants";
import { TSecondaryEvents } from "../lib/types";

export default function App() {
    const [items, setItems] = useState(INITIAL_ITEM_LIST);
    const [secondaryEvents, setSecondaryEvents] = useState<TSecondaryEvents | undefined>();

    useEffect(() => {
        const _handleMarkAllAsComplete = () => {
            setItems((prev) => prev.map((item) => ({ ...item, isCompleted: true })));
        };

        const _handleMarkAllAsInComplete = () => {
            setItems((prev) => prev.map((item) => ({ ...item, isCompleted: false })));
        };

        const _handleResetToInitial = () => {
            setItems(INITIAL_ITEM_LIST);
        };

        const _handleRemoveAllItems = () => {
            setItems([]);
        };

        const eventObj = {
            onMarkAllAsComplete: _handleMarkAllAsComplete,
            onMarkAllAsInComplete: _handleMarkAllAsInComplete,
            onResetToInitial: _handleResetToInitial,
            onRemoveAllItems: _handleRemoveAllItems,
        };

        setSecondaryEvents(eventObj);
    }, []);

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
