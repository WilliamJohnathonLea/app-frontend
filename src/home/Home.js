import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

function Home() {
    const { isAuthenticated } = useAuth0();

    const accButton =
        !isAuthenticated &&
            <button className="hover:text-blue-600 py-2">
                Create an account
            </button>;

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
                <h1 className="text-4xl text-left font-medium mb-6">
                <span className="text-blue-600">Oven-ready</span> tools to get analysis done.
                </h1>
                <button className="transition-colors duration-150 border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow p-2 mr-4">
                    Find out more
                </button>
                {accButton}
            </div>
        </div>
    );
}

export default Home;
