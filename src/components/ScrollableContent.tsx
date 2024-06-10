import React from "react";

// Define the props for the component
type Props = {
    children: React.ReactNode;
};

// Define the ScrollableContent component with the prop that accepts children as ReactNode
const ScrollableContent: React.FC<Props> = ({ children }) => {
    // Return the section with the children passed to it
    return (
        <section className="overflow-auto max-h-[calc(100vh-9rem)] sm:max-h-[calc(100vh-10rem)] md:max-h-[calc(100vh-11rem)] lg:md:max-h-[calc(100vh-5rem)] pb-10">
            {children}
        </section>
    );
}

export default ScrollableContent;