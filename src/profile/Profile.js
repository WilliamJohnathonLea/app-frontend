import React from 'react';

import NotSignedIn from '../common/NotSignedIn';

import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
    const { user, isAuthenticated } = useAuth0();

    var content;
    if (isAuthenticated) {
        content =
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <h1 className="text-3xl text-left font-medium lg:text-4xl">
                        {user.name}
                    </h1>
                </div>
            </div>;
    } else {
        content = <NotSignedIn />;
    }

    return content;
}

export default Profile;
