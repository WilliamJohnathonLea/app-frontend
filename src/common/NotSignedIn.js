import React from 'react';

function NotSignedIn() {
    return (
        <div className="grid grid-cols-1">
            <div className="col-span-1">
                <h1 className="text-3xl text-left font-medium lg:text-4xl">
                    You must sign in to view this page.
                </h1>
            </div>
        </div>
    );
}

export default NotSignedIn;
