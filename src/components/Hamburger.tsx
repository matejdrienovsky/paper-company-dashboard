import {FC, useState} from 'react';

const NavLink: FC<{ href: string, label: string }> = ({ href, label }) => (
    <a className="leading-relaxed md:leading-10 font-bold text-xl md:text-2xl hover:text-[#531DACFF] focus:text-[#531DACFF]" href={ href }>
        { label }
    </a>
);

const HamburgerButton: FC<{ onClick: () => void, navOpen: boolean }> = ({ onClick, navOpen }) => (
    <button role="button" className="lg:hidden pl-4 absolute bottom-2 left-0" onClick={onClick}>
        {navOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#260065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#260065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8" width="25" height="25" viewBox="0 0 15 15">
                <path fill="#260065" fillRule="evenodd" d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Z" clipRule="evenodd"/>
            </svg>
        )}
    </button>
);

const Hamburger = () => {
    const [navOpen, setNavOpen] = useState(false);
    const routes = [
        { path: '/products', label: 'Products' },
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/terms', label: 'Terms' },
        { path: '/shipping', label: 'Shipping' },
    ];

    return (
        <>
            { navOpen &&
                <div id="navbar-overlay" className="fixed top-0 left-0 z-10 flex flex-col justify-center w-screen h-screen bg-white transition-all duration-250 md:overflow-hidden">
                    <nav className="self-center flex flex-col items-center overlay-content">
                        { routes.map(route => <NavLink key={route.path} href={route.path} label={route.label} />) }
                    </nav>
                    <HamburgerButton onClick={() => setNavOpen(false)} navOpen={navOpen} />
                </div>
            }
            <HamburgerButton onClick={() => setNavOpen(true)} navOpen={navOpen} />
        </>
    );
};

export default Hamburger;