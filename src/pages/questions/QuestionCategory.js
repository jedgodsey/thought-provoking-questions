import React , {useState} from 'react';
import Question from '../../components/Question';
import { Link } from 'react-router-dom';


const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const QuestionCategory = (props) => {
    const [category, setCategory] = useState(capitalize(props.match.url.split("/")[2]));
    const [questions, setQuestions] = useState([
        <Link to={`/questions/${category}/sah23453hfs34`}><Question/></Link>,//this should only be temporary, all data should be loaded from api
    ]);


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
                <Question category = {category}/>
                {/* <Question question = "Is anything even Real??"/>
                <Question question = "What are Some of the results of quarantine ??"/>
                <Question question = "How is that some are able to eat as much as they can while others cannot even taste food!??"/>
                <Question/>
                <Question/>
                <Question/>
                <Question/> */}
            </div>
        </main>
    );
}

export default QuestionCategory;
