import React, {useState} from 'react';
import Question from '../../components/Questions';
import { Link } from 'react-router-dom';


function AllQuestions(props){
    return (
        <main className = "community-questions">

            <div className="title container mt-4">
                <h1>Community Questions</h1>
                <div className = "filter_add_buttons">
                    <button type="button" className="btn btn-light">Filter</button>
                    <Link to="/questions/add"><button type="button" className="btn btn-primary">Add "?"</button></Link>
                    
                </div>
            </div>
            
            <div className= "allQuestions">
                <Question/>
                <Question question = "Is anything even Real??"/>
                <Question question = "What are Some of the results of quarantine ??"/>
                <Question question = "How is that some are able to eat as much as they can while others cannot even taste food!??"/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
            </div>
        </main>
    );
}

export default AllQuestions;
