type UnorderedListProps = {
    children: React.ReactNode;
};
export default function UnorderedList({ children }: UnorderedListProps) {
    return <ul>{children}</ul>;
}
