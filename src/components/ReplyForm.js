import React, { useEffect, useState } from 'react';
import ReplyModel from '../models/replies';

const ReplyForm = (props) => {
    const [input, setInput] = useState('');

    useEffect(()=>{
        console.log("component did mount")
    },[]);

    const onTextChange = (event)=>{
        setInput(event.target.value)
    }

    const handleSubmit = (event)=>{
        // event.preventDefault();
        const submitingValue = {
            reply: input,
            questId: props.questionId
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
            Reply Form
            <form onSubmit = {handleSubmit}>
                <input onChange = {onTextChange} type="text" value = {input}/>
                <input type= "submit" value = "Submit"/>
            </form>
        </div>
    );
}

export default ReplyForm;