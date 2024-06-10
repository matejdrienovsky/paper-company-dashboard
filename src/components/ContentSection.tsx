import Header from "./Header";
import Dashboard from "./Dashboard.tsx";
import React from "react";

const ContentSection: React.FC = () => {
    return (
        <section className="row-span-10 col-span-6 flex flex-col h-screen">
            <Header/>
            <Dashboard/>
        </section>
    );
};

export default ContentSection;