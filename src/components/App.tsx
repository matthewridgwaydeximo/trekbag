import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Main from "./Main";
import { INITIAL_ITEM_LIST } from "../lib/constants";

export default function App() {
    const [items, setItems] = useState(INITIAL_ITEM_LIST);

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
            <Main items={items} handleAddItem={handleAddItem} />
            <Footer />
        </>
    );
}
