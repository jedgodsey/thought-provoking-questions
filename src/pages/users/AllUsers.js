import React, { useEffect, useState } from 'react';
import UserModel from '../../models/users';
import { useSelector } from 'react-redux';
import UserChecker from '../../models/userChecker';
import UserCard from '../../components/UserCard';


const AllUsers = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserModel.all().then((res)=>{
            const arrUsers = res.data;
            const arrUserCards = arrUsers.map((user,index)=>{
                console.log(user._id)
                return <UserCard key = {index} user={user}/>
            });
            setUsers(arrUserCards);
            console.log(res.data);
        });
        console.log("is this working")
    }, []);

    return (
        <div>
            All Users
            {/* <UserCard/> */}
            {users}
        </div>
    );
}

export default AllUsers;
