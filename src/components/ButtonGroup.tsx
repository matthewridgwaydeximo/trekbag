import Button from "./Button";
import { TSecondaryEvents } from "../lib/types";
import { useButtonGroup } from "../lib/hooks/useButtonGroup";

type TButtonGroupProps = {
    onSecondaryEvents: TSecondaryEvents | undefined;
};

export default function ButtonGroup({ onSecondaryEvents }: TButtonGroupProps) {
    const { buttonGroupOptions } = useButtonGroup({ onSecondaryEvents });

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
