import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import QuestionModel from '../models/question';
import {useSelector} from 'react-redux';
import UserChecker from '../models/userChecker';


const EditQuestion = (props) => {
    const [questionText, setQuestionText] = useState(props.question.question);
    const [pickedCategory, setPickedCategory] = useState(props.question.category);
    const [userId, setUserId] = useState('');
    const auth = useSelector(state=> state);
    let history = useHistory();

    useEffect(()=>{

        const userIdentification = UserChecker.getUserId(auth);
        console.log(pickedCategory);
        console.log('userid: ', userIdentification);
        console.log(props.question._id)
        setUserId(userIdentification);

    },[]);

    const questionTextChange = (event) =>{
        console.log("now changing the text of the question")
        setQuestionText(event.target.value);
    }

    const handleSubmit = (event)=>{
        // event.preventDefault();//This prevents the page refresh
        const temp = {
            question: questionText,
        }
        QuestionModel.update(props.question._id,temp).then((response)=>{
            console.log(response);
            // history.push(`/questions/${pickedCategory}/${props.question._id}`);
        });
    }

    
    return (
        <div>
            <h3>Question Form</h3>
            <form onSubmit = {handleSubmit}>
                <textarea 
                onChange = {questionTextChange}
                className = "form_input"
                placeholder = "Enter your Question"
                value = {questionText}
                />

                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
}

export default EditQuestion;
