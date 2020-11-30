import React, {useState, useEffect} from 'react';
import QuestionModel from '../../models/question';

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const ShowQuestion = (props) => {
    const [category, setCategory] = useState(capitalize(props.match.url.split("/")[2]));
    const [id, setId] = useState(props.match.url.split("/")[3]);
    const [questionText, setQuestionText] = useState("");

    useEffect(()=>{
        QuestionModel.byId(id).then((response)=>{
            console.log(response.data.question.question)
            setQuestionText(response.data.question.question)
        })
    },[])// psuedo componentdidmount
    
    return (
        <div>
            This is your question about {category}
            <p>{questionText}</p>
        </div>
    );
}

export default ShowQuestion;
