import React , {useEffect, useState} from 'react';
import Question from '../../components/Question';
import { Link } from 'react-router-dom';
import QuestionModel from '../../models/question';


const QuestionCategory = (props) => {
    const [category, setCategory] = useState(props.match.url.split("/")[2]);
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        QuestionModel.questionsByCategory(category).then((response)=>{

            const questionElems = response.data.questions;
            console.log(questionElems)
            const questionArray = questionElems.map((question,index)=>{
                return <Link to={`/questions/${category}/${question._id}`} key = {index} ><Question question = {question.question} /></Link>;
            });
            setQuestions(questionArray);

        });
    },[]);

    return (
        <main>
            <h1>
                Welcome the Category {category}
            </h1>

            <p>
                This is where i would make an api i call to the database/api i made.
            </p>

            <div>
                {questions}
            </div>
        </main>
    );
}

export default QuestionCategory;
