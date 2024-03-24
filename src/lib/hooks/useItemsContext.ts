import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContextProvider";

export default function useItemsContext() {
    const context = useContext(ItemsContext);

    if (!context) {
        throw new Error("useItemsContext must be used within an ItemsContextProvider");
    }

    return context;
}
