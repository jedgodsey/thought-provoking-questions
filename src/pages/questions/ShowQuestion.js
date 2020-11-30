import React, {useState, useEffect} from 'react';
import ReplyForm from '../../components/ReplyForm';
import QuestionModel from '../../models/question';

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const ShowQuestion = (props) => {
    const [category, setCategory] = useState(capitalize(props.match.url.split("/")[2]));
    const [id, setId] = useState(props.match.url.split("/")[3]);
    const [questionText, setQuestionText] = useState("");
    const [replies, setReplies] = useState([]);

    useEffect(()=>{
        QuestionModel.byId(id).then((response)=>{
            console.log(`The question is: ${response.data.question.question}`)
            const replyArray = response.data.question.replies 
            console.log(replyArray)
            setQuestionText(response.data.question.question)
            getReplies(replyArray);
        })
    },[])// psuedo componentdidmount
    
    const getReplies = (replyArray) =>{
        const replyElem = replyArray.map((reply,index)=>{
            return <div key = {index} >{reply.reply}</div> 
        });
        console.log(replyElem);
        setReplies(replyElem);
    };  

    return (
        <div>
            {/* This is your question about {category} */}
            <h3>{questionText}</h3>
            {replies}
            <ReplyForm questionId = {id}/>
        </div>
    );
}

export default ShowQuestion;
