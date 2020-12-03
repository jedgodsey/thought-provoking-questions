import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import UserChecker from '../../models/userChecker';
import UserModel from '../../models/users';

const PersonalDash = () => {
    const [currentUser, setCurrentUser] = useState('');
    const auth = useSelector(state=> state);

    useEffect(()=>{
        const currentUserID = UserChecker.getUserId(auth);
        UserModel.byId(currentUserID).then((response)=>{
            console.log(response.data.user);
            setCurrentUser(response.data.user);
        });
        console.log(auth.user)
        console.log("This is your personal dash")
    },[]);

    return (
        <div>
            <h1> Personal Dash </h1>
            <p>{currentUser.name}</p>
        </div>
    );
}

export default PersonalDash;
