import React, { useEffect, useState , useReducer } from 'react';
import ReplyModel from '../models/replies';
// import { useSelector } from 'react-redux';
// import UserChecker from '../models/userChecker';


const EditReply = (props) => {
    const [input, setInput] = useState(props.reply.reply);
    const [update, setUpdate] = useState(false);
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    // const auth = useSelector(state=> state);
    // const [userId, setUserId] = useState('');

    useEffect(()=>{

    },[])

    useEffect(()=>{
        // const userIdentification = UserChecker.getUserId(auth);
        // setUserId(userIdentification);
        console.log(props.reply._id)
    },[])

    const changeHandler = (event) =>{
        console.log(event.target.value);
        setInput(event.target.value);
        console.log(props.reply.questions)
    }

    const submitHandler = (event) =>{
        // event.preventDefault();
        const submitingValue = {
            reply: input,
            // questId: props.reply.questions,
            // user: userId
        };
        ReplyModel.update(props.reply._id,submitingValue).then((res)=>{
            console.log(event);
        });
        // setInput(event.);
    }
    
    const deleteButtonHandler = ()=>{
        ReplyModel.delete(props.reply._id).then((res)=>{
            console.log("deleting my reply")
            // setUpdate(!update);
            forceUpdate();
        })
    }

    return (
        <div>
            Now Editing your reply
            <form onSubmit ={submitHandler}>
                <input value = {input} onChange = {changeHandler}/>
                <input type= "submit" value = "Submit"/>
            </form>
            <form onSubmit ={deleteButtonHandler}>
                <input className ="btn btn-danger" type= "submit" value = "Delete"/>
            </form>
        </div>
    );
}

export default EditReply;
