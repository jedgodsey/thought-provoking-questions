import React, { useEffect, useState } from 'react';
import ReplyModel from '../models/replies';
import { useSelector } from 'react-redux';
import UserChecker from '../models/userChecker';

const ReplyForm = (props) => {
    const [input, setInput] = useState('');
    const auth = useSelector(state=> state);
    const [userId, setUserId] = useState('');

    useEffect(()=>{
        const userIdentification = UserChecker.getUserId(auth);
        setUserId(userIdentification);
    },[]);

    const onTextChange = (event)=>{
        setInput(event.target.value)
    }

    const handleSubmit = (event)=>{
        // event.preventDefault();
        const submitingValue = {
            reply: input,
            questId: props.questionId,
            user: userId
        };
        console.log(submitingValue);
        ReplyModel.addByQuestionId(submitingValue).then((response)=>{
            console.log("Your Reply has been submited");
            console.log(response)
            console.log("Submit button has been clicked");
        })
    }

    return (
        <div>
            Respond:
            <form onSubmit = {handleSubmit}>
                <input onChange = {onTextChange} type="text" value = {input}/>
                <input type= "submit" value = "Submit"/>
            </form>
        </div>
    );
}

export default ReplyForm;
