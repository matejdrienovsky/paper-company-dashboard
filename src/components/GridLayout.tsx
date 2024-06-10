import Aside from "./Aside.tsx";

type Props = {
    children: React.ReactNode;
};

const GridLayout: React.FC<Props> = ({ children }) => {
    return (
        <main className="grid grid-rows-10 grid-cols-6 gap-y-4 grid-flow-col-dense max-w-screen h-screen max-md:overflow-auto lg:overflow-hidden">
            <Aside />
            {children}
        </main>
    );
};


export default GridLayout;