import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import UnorderedList from "./UnorderedList";

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
