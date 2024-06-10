import Header from "./Header";
import Navbar from "./Navbar";

const ContentSection: React.FC = () => {
    return (
        <section className="row-span-10 col-span-6 flex flex-col h-screen">
            <Header/>
            <Navbar/>
        </section>
    );
};

export default ContentSection;