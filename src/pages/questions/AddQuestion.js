import React from 'react';
import { Link } from 'react-router-dom';
import QuestionForm from '../../components/QuestionForm';

const AddQuestion = () => {
    return (
        <main className = "add-question">
            <QuestionForm/>
        </main>
    );
}

export default AddQuestion;
