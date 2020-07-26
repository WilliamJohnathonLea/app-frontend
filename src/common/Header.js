import React from "react";
import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

function Header() {
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
                className="inline-block hover:text-blue-600 mr-4"
            >
                Sign Out
            </button>;
    } else {
        loginButton =
            <button
                onClick={() => loginWithRedirect()}
                role="link"
                className="inline-block hover:text-blue-600 mr-4"
            >
                Sign In
            </button>;
    }

    return (
        <header className="bg-blue-900 text-white">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between flex-wrap py-4">
                    <div className="flex items-center flex-shrink-0 mr-6">
                        <span className="font-semibold text-2xl tracking-tight">
                            Hello World
                        </span>
                    </div>
                    <div className="flex flex-grow items-center">
                        <div className="flex flex-row list-none ml-auto">
                            {
                                isAuthenticated &&
                                    <Link to="/profile" className="inline-block hover:text-blue-600 mr-4">
                                        {user.name}
                                    </Link>
                            }
                            {loginButton}
                        </div>
                    </div>
                </nav>
                <div className="mb-6 border-b-4 border-blue-600"></div>
            </div>
        </header>
    );
}

export default Header;
