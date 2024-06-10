import Header from "./Header";
import Dashboard from "./Dashboard.tsx";
import React from "react";

// Define the ContentSection component which is used to display the main content of the app
const ContentSection: React.FC = () => {
    return (
        <section className="row-span-10 col-span-6 flex flex-col h-screen">

            {/* Include the Header component */}
            <Header/>

            {/* Include the Dashboard component */}
            <Dashboard/>

        </section>
    );
};

export default ContentSection;