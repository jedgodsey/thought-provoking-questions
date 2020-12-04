import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import UserChecker from '../../models/userChecker';
import UserModel from '../../models/users';
import Question from '../../components/Question';
import { Link } from 'react-router-dom';
import QuestionModel from '../../models/question';

const PersonalDash = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [userQuestions, setUserQuestions] = useState([]);
    const auth = useSelector(state=> state);

    useEffect(()=>{
        const currentUserID = UserChecker.getUserId(auth);
        UserModel.byId(currentUserID).then((response)=>{
            console.log(response.data.user);
            setCurrentUser(response.data.user);
        });
        QuestionModel.findByUserId(currentUserID).then((res)=>{
            const userQuestions = res.data;
            const questionComponents = userQuestions.map((question,index)=>{
                return <Link to={`/questions/${question.category}/${question._id}`} key = {index} ><Question question = {question.question} /></Link>;
            })
            setUserQuestions(questionComponents);
            console.log(questionComponents)
        });
        console.log(auth.user)
        console.log("This is your personal dash")
    },[]);

    return (
        <div>
            <h1> Your Questions </h1>
            <div className = "questions-holder">
                {userQuestions}
            </div>
        </div>
    );
}

export default PersonalDash;
