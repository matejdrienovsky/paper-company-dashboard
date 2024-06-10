import Aside from "./Aside.tsx";
import React from "react";

// Define the props for the GridLayout component, which is a React functional component
type Props = {
    children: React.ReactNode;
};

// Define the GridLayout component
const GridLayout: React.FC<Props> = ({ children }) => {

    // Render an HTML main tag alongside the Aside component and children components which is passed as props
    return (
        <main className="grid grid-rows-10 grid-cols-6 gap-y-4 grid-flow-col-dense max-w-screen h-screen max-md:overflow-auto lg:overflow-hidden">
            <Aside />
            {children}
        </main>
    );
};

export default GridLayout;