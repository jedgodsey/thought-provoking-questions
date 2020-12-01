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
        <main className = "questions-by-category">
            <h1>
                Welcome the {category} questions
            </h1>

            <div className ="cards-holder">
                {questions}
            </div>
            <Link to="/questions"><button type="button" className="btn btn-primary">back</button></Link>
        </main>
    );
}

export default QuestionCategory;
