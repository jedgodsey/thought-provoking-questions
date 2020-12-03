import React, { useEffect, useState } from 'react';
import UserModel from '../../models/users';
import { useSelector } from 'react-redux';
import UserChecker from '../../models/userChecker';


const AllUsers = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserModel.all().then((res)=>{
            console.log(res);
        });
        console.log("is this working")
    }, []);

    return (
        <div>
            This is where all the user would go.
        </div>
    );
}

export default AllUsers;
