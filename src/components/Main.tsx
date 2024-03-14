type TMainProps = {
    children: React.ReactNode;
};

export default function Main({ children }: TMainProps) {
    return <main>{children}</main>;
}
