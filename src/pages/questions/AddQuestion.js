import React from 'react';
import { Link } from 'react-router-dom';
import QuestionForm from '../../components/QuestionForm';

const AddQuestion = () => {
    return (
        <main className = "add-question">
            Add question
            <QuestionForm/>
            <Link to={`/questions`}><button type="button" className="btn btn-primary">back</button></Link>
        </main>
    );
}

export default AddQuestion;
