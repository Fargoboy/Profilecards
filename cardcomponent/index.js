import React from 'react';
import Profile from './profile';
import UserData from './userData';

function ProfileIndex() {
    
    return (
        <div>
            {
                UserData().data.map(user => <Profile userInfo={user}/>)
            }
            
        </div>
    );
}

export default ProfileIndex;