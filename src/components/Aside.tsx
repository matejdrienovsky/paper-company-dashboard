import logo from '../assets/paper-like-3.png'
import React, {FC} from "react";

// NavLink component to be used in the Aside component
// It receives a href and children as props and returns a list item with a link
// Links will be used to navigate to different pages in the future
const NavLink: FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <li className="leading-relaxed xl:leading-10 font-bold text-xl xl:text-2xl 2xl:text-3xl hover:text-[#531DACFF]">
        <a href={href}>{children}</a>
    </li>
);

// Creating the Aside component which is a sidebar in the app
const Aside = () => {

    // Defining the routes for the app
    // Routes will be used to navigate to different pages in the future
    const routes = [
        { path: "/products", label: "Products" },
        { path: "/admin", label: "Dashboard" },
        { path: "/about", label: "About" },
        { path: "/terms", label: "Terms" },
        { path: "/shipping", label: "Shipping" },
    ];

    // Returning the aside element with the logo and the navigation links
    return (
        <aside className="max-lg:hidden lg:row-span-10 bg-[#F5F5F5]">
            <nav className="flex flex-col justify-between h-full">
                <a className="w-full h-auto" href="/">
                    <img className="h-auto max-w-full mx-auto mt-4 pr-5" src={logo} alt="Paper Like logo"/>
                </a>
                <ul className="flex flex-col pb-4 pl-4">
                    {routes.map((route) => <NavLink key={route.path} href={route.path}>{route.label}</NavLink>)}
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;