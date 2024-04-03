import { BackgroundHeading, Footer, Main, Header, Sidebar, AddItemForm, ButtonGroup, UnorderedList } from "../lib/exports";

export default function App() {
    return (
        <>
            <BackgroundHeading />
            <Main>
                <Header />
                <UnorderedList />
                <Sidebar>
                    <AddItemForm />
                    <ButtonGroup />
                </Sidebar>
            </Main>
            <Footer />
        </>
    );
}
