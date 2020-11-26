import React, {useState} from 'react';
import Question from '../../components/Question';
import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';


function AllQuestions(props){
    const [categories, setCategories] = useState([
        <Link to="/questions/ethical"><Categories/></Link>,
        <Link to="/questions/polls"><Categories category = "Polls"/></Link>,
    ]);

    console.log(props)

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
                {categories}
                {Question}
            </div>
        </main>
    );
}

export default AllQuestions;
