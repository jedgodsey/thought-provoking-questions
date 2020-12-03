import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import QuestionModel from '../models/question';
import {useSelector} from 'react-redux';
import UserChecker from '../models/userChecker';


const QuestionForm = () => {
    const [questionText, setQuestionText] = useState('');
    const [pickedCategory, setPickedCategory] = useState('Philosophical');
    const [categories, setCategories] = useState('');
    const [userId, setUserId] = useState('');
    const auth = useSelector(state=> state);
    let history = useHistory();

    useEffect(()=>{

        //This will come in handy when i want to make a drop down menu for categories
        QuestionModel.categories().then((response)=>{
            const {categories} = response.data;
            const categoryStates = categories.map((category,index)=>{
                // return { [category] :<option key = {index}>{category}</option>}
                return <option key = {index}>{category}</option>
            });
            const userIdentification = UserChecker.getUserId(auth);

            console.log('userid: ', userIdentification)
            setUserId(userIdentification);
            setCategories(categoryStates);
        });

    },[]);

    const questionTextChange = (event) =>{
        console.log("now changing the text of the question")
        setQuestionText(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();//This prevents the page refresh
        const temp = {
            question: questionText,
            category: pickedCategory,
            user: userId
        }
        QuestionModel.addQuestion(temp).then((response)=>{
            console.log(response);
            history.push("/questions");
        });
    }

    const handleChange = (event)=>{
        setPickedCategory(event.target.value);
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
                {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
                <select value = {pickedCategory} onChange={handleChange} className="selectpicker">
                    {categories}
                </select>

                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
}

export default QuestionForm;
