import React, {useState, useEffect} from 'react';
import QuestionModel from '../../models/question';

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const ShowQuestion = (props) => {
    const [category, setCategory] = useState(capitalize(props.match.url.split("/")[2]));

    useEffect(()=>{
        QuestionModel.all().then((response)=>{
            console.log(response)
        })
    },[])// psuedo componentdidmount
    return (
        <div>
            This is your question about {category}
        </div>
    );
}

export default ShowQuestion;
