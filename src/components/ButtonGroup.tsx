import Button from "./Button";

type ButtonGroupOptionsType = {
    text: string;
}[];

const buttonGroupOptions: ButtonGroupOptionsType = [
    {
        text: "Mark all as complete",
    },
    {
        text: "Mark all as incomplete",
    },
    {
        text: "Reset to initial",
    },
    {
        text: "Remove all items",
    },
];

export default function ButtonGroup() {
    return (
        <section className="button-group">
            {buttonGroupOptions.map(({ text }) => (
                <Button key={text}>{text}</Button>
            ))}
        </section>
    );
}
