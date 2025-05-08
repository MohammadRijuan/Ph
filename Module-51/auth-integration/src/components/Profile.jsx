import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {

    const {user}=use(AuthContext)

    return (
        <div>
            <h1>profile page</h1>
            {user.email}
            
        </div>
    );
};

export default Profile;