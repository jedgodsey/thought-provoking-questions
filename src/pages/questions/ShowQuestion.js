import React, {useState, useEffect} from 'react';
import ReplyForm from '../../components/ReplyForm';
import { Link } from 'react-router-dom';
import QuestionModel from '../../models/question';
import { useSelector } from 'react-redux';
import UserChecker from '../../models/userChecker';
import UserModel from '../../models/users';
import Reply from '../../components/Reply';
import EditQuestion from '../../components/EditQuestion';

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const ShowQuestion = (props) => {
    const category = capitalize(props.match.url.split("/")[2]);
    const [id, setId] = useState(props.match.url.split("/")[3]);
    const [questionText, setQuestionText] = useState("");
    const [question, setQuestion] = useState("");
    const [replies, setReplies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState('');
    const [creatorName, setCreatorName] = useState(null);
    const auth = useSelector(state=> state);
    const [isaMatch, setIsaMatch] = useState(false);
    const [editing, setEditing] = useState(false);


    useEffect(()=>{

        //First Looks for Question By its Id
        QuestionModel.byId(id).then((response)=>{

            //Stores question's data in temp variables
            const replyArray = response.data.question.replies;
            const creatorId = response.data.question.user;

            //We look for the user that created the post
            UserModel.byId(creatorId).then((res)=>{

                // If there was a user then we shall display the user
                if(res.data.user){
                    // console.log(res.data.user.name)
                    // console.log(`Question created by user fd: ${response.data.question.user}`);

                    //First will check the user is logged in
                    if(UserChecker.isUserLoggedIn(auth)){

                        const userIdentification = UserChecker.getUserId(auth);
                        // console.log(userIdentification);
                        // console.log(creatorId);
                        setUserId(userIdentification);
                        setCreatorName(res.data.user.name);
                        if(userIdentification === creatorId){
                            setIsaMatch(true);
                        }
                        getReplies(replyArray);
                    }
                }

                console.log(response.data.question);
                setQuestion(response.data.question);
                setQuestionText(response.data.question.question);
                getReplies(replyArray);
                // console.log(creatorId);
                setLoading(false);
            });
        })
    },[])// psuedo componentdidmount
    
    const getReplies = (replyArray) =>{
        const replyElem = replyArray.map((reply,index)=>{
            return <Reply  key = {index} reply = {reply}/> 
        });
        setReplies(replyElem);
    };  
    
    const editButtonHandler = (event) =>{
        console.log(event);
        setEditing(!editing);
    }

    return (
        <div className ="question-form-wrapper mb-5">
        <div className = "show-question">
            {loading ? 
                <p>loading...</p> 
            : (
                <div>
                    <div className="mb-4">
                        <h3>{questionText}</h3>

                        {creatorName ?
                            <p>by {creatorName}</p>
                            :
                            <p>by anonymous</p>
                        }
                        {isaMatch && <h5> <button className = "btn btn-light" onClick = {editButtonHandler}>Edit Question</button></h5>}
                        {editing && <EditQuestion question = {question}/>}
                    </div>
                    
                    <div className="allReplies">
                        <h5><u>All Replies</u></h5>
                        
                        {replies}

                    </div>
                    <ReplyForm questionId = {id}/>
                    <Link to={`/questions/${category}`}><button type="button" className="btn btn-primary">back</button></Link>
                </div>
            )}
        </div>
        </div>
    );
}

export default ShowQuestion;
