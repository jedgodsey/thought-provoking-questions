import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import QuestionModel from '../../models/question';


function AllQuestions(props){
    const [categories, setCategories] = useState([]);

    useEffect(()=>{//ComponentDidMount

        QuestionModel.categories().then((response)=>{

            const {categories} = response.data;
            const categoriesArray = categories.map((category,index)=>{
                return <Link to={`/questions/${category}`} key = {index} ><Categories category = {category} /></Link>;
            });
            setCategories(categoriesArray);
        });

    },[]);

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
            </div>
        </main>
    );
}

export default AllQuestions;
