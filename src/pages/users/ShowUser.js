import React, { useEffect, useState } from 'react';
import Question from '../../components/Question';
import QuestionModel from '../../models/question';
import UserModel from '../../models/users';
import { Link } from 'react-router-dom';


const ShowUser = (props) => {
    const userId = props.match.url.split('/')[2];
    const [currentUser, setCurrentUser] = useState('');
    const [userQuestions, setUserQuestions] = useState([]);

    useEffect(()=>{
        console.log(userId);
        UserModel.byId(userId).then((response)=>{
            console.log(response.data.user);
            setCurrentUser(response.data.user);
        });
        QuestionModel.findByUserId(userId).then((res)=>{
            const questions = res.data;
            const questionsComponents = questions.map((question,index)=>{
                return <Link to={`/questions/${question.category}/${question._id}`} key = {index} ><Question question = {question.question} /></Link>;
            })
            console.log(questionsComponents);
            setUserQuestions(questionsComponents);
        })
    },[]);
    return (
        <div>
            <h2>{currentUser.name}'s Questions</h2>
            <div className = "questions-holder">
                {userQuestions}
            </div>
        </div>
    );
}

export default ShowUser;
