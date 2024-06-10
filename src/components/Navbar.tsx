const Navbar = () => {
    type ButtonProps = {
        title: string;
    }

    const Button = ({title}: ButtonProps) => (
        <button className="tab-btn text-nowrap font-semibold">{title}</button>
    );

    const buttonTitles = ["OVERVIEW", "ALL PRODUCTS", "CREATE NEW PRODUCT", "LIST ALL USERS"];

    return (
        <section className="flex-1 flex-col justify-between w-full">
            <h2 className="sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 pl-4">
                Admin Dashboard
            </h2>
            <section className="flex flex-row justify-between px-4 border-b-2 border-[#260065] pt-2 pb-1">
                <div className="flex flex-row gap-x-8 overflow-x-auto no-scrollbar text-xs md:text-sm lg:text-base">
                    {buttonTitles.map(title => <Button title={title} key={title} />)}
                </div>
            </section>
        </section>
    );
};

export default Navbar;