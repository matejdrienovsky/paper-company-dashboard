import Hamburger from "./components/Hamburger";
import GridLayout from "./components/GridLayout";
import ContentSection from "./components/ContentSection";


import './App.css'

function App() {

    return (
        <>
            {/* Grid layout for the entire app */}
            <GridLayout>
                <ContentSection/>
            </GridLayout>

            {/* The Hamburger component used for a small devices menu icon */}
            <Hamburger />
        </>

    )
}

export default App
