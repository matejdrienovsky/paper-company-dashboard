type Props = {
    children: React.ReactNode;
};

const ScrollableContent: React.FC<Props> = ({ children }) => {
    return (
        <section className="overflow-auto max-h-[calc(100vh-9rem)] sm:max-h-[calc(100vh-10rem)] md:max-h-[calc(100vh-11rem)] lg:md:max-h-[calc(100vh-5rem)] pb-10">
            {children}
        </section>
    );
}

export default ScrollableContent;