import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserChecker from '../models/userChecker';
import UserModel from '../models/users';
import EditReply from './EditReply';

const Reply = (props) => {
    const [loading, setLoading] = useState(true);
    const [creator, setCreator] = useState('');
    const [isAMatch, setIsAMatch] = useState(false);
    const [editing, setEditing] = useState(false);
    const auth = useSelector(state=> state);

    useEffect(()=>{
        // console.log(auth)
        // console.log(props.reply.user)
        const userID = props.reply.user
        UserModel.byId(userID).then((res)=>{
            // console.log(res.data.user);
            setCreator(res.data.user);
        })
        if(userID === UserChecker.getUserId(auth)){
            console.log("wow its the same person")
            setIsAMatch(true);
        }

    },[])

    const editButtonHandler = (event) =>{
        console.log(event);
        setEditing(!editing);
    }

    return (
        <div className="mt-2">
            {props.reply.reply} by {creator.name} {isAMatch && <button className = "btn btn-light" onClick = {editButtonHandler}>Edit Reply</button>}
            {editing && <EditReply reply = {props.reply}/>}
        </div>
    );
}

export default Reply;
