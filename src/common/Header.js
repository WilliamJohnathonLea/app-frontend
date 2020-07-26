import React from "react";
import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const {
        isAuthenticated,
        user,
        loginWithRedirect,
        logout
    } = useAuth0();

    var loginButton;
    if (isAuthenticated) {
        loginButton =
            <button
                onClick={() => logout()}
                role="link"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-dark-gray mr-4 sm:w-auto"
            >
                Sign Out
            </button>;
    } else {
        loginButton =
            <button
                onClick={() => loginWithRedirect()}
                role="link"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-dark-gray mr-4 sm:w-auto"
            >
                Sign In
            </button>;
    }

    return (
        <nav className="flex items-center justify-between flex-wrap p-6 lg:border-b-2 lg:border-gray-200">
            <div className="flex items-center flex-shrink-0 text-dark-gray mr-6">
                <span className="font-semibold text-xl tracking-tight">
                    Hello World
                </span>
            </div>

            {/* Hamburger menu */}
            <div className="block lg:hidden">
            <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-gray-600 hover:border-gray-600">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            </div>
            <div className={"lg:flex flex-grow items-center" +
                    (navbarOpen ? " w-full flex": " hidden")}>
                <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    {isAuthenticated &&
                        <Link to="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-dark-gray mr-4 sm:w-auto">
                            {user.name}
                        </Link>
                    }

                    {loginButton}

                </div>
            </div>
        </nav>
    );
}

export default Header;
