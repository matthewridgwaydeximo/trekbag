import Button from "./Button";
import { useButtonGroup } from "../lib/hooks/useButtonGroup";
import useItemsContext from "../lib/hooks/useItemsContext";

export default function ButtonGroup() {
    const { secondaryEvents } = useItemsContext();
    const { buttonGroupOptions } = useButtonGroup({ onSecondaryEvents: secondaryEvents });

    return (
        <section className="button-group">
            {buttonGroupOptions.map(({ text, onClick }) => (
                <Button key={text} onClick={onClick}>
                    {text}
                </Button>
            ))}
        </section>
    );
}
