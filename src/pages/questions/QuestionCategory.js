import React , {useEffect, useState} from 'react';
import Question from '../../components/Question';
import { Link } from 'react-router-dom';
import QuestionModel from '../../models/question';


const QuestionCategory = (props) => {
    const [category, setCategory] = useState(props.match.url.split("/")[2]);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        QuestionModel.questionsByCategory(category).then((response)=>{

            const questionElems = response.data.questions;
            console.log(questionElems)
            const questionArray = questionElems.map((question,index)=>{
                return <Link to={`/questions/${category}/${question._id}`} key = {index} ><Question question = {question.question} /></Link>;
            });
            setQuestions(questionArray);
            setLoading(false);
        });
    },[]);

    return (
        <main className = "questions-by-category">
            {loading ? <p>loading...</p> : (
                <div>
                    <h1>
                        {category} Questions 
                    </h1>

                    <div className ="cards-holder">
                        {questions}
                    </div>
                    <Link className="ml-4" to="/questions"><button type="button" className="btn btn-primary">back</button></Link>
                </div>
            )}
            
        </main>
    );
}

export default QuestionCategory;
