import React, { useEffect, useState } from 'react';
import ReplyModel from '../models/replies';

const EditReply = (props) => {
    const [input, setInput] = useState(props.reply.reply);
    useEffect(()=>{
        console.log(props.reply._id)
    },[])

    const changeHandler = (event) =>{
        console.log(event.target.value);
        setInput(event.target.value);
    }

    const submitHandler = (event) =>{
        // event.preventDefault();
        const submitingValue = {
            reply: input,
        };
        ReplyModel.update(props.reply._id,submitingValue).then((res)=>{
            console.log(event);
        });
        // setInput(event.);
    }

    return (
        <div>
            Now Editing your reply
            <form onSubmit ={submitHandler}>
                <input value = {input} onChange = {changeHandler}/>
                <input type= "submit" value = "Submit"/>
            </form>
        </div>
    );
}

export default EditReply;
