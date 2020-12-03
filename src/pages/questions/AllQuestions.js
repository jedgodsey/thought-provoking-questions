import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import QuestionModel from '../../models/question';
import YoutubeModel from '../../models/youtube';
import YouTube from 'react-youtube';


function AllQuestions(props){
    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);

    const opts = {
        height : '150',
        width: '300',
        // playerVars : {
        //     autoplay: 1
        // } This will make the video play on load
    }

    useEffect(()=>{//ComponentDidMount

        QuestionModel.categories().then((response)=>{

            const {categories} = response.data;
            const categoriesArray = categories.map((category,index)=>{
                return <Link to={`/questions/${category}`} key = {index} ><Categories category = {category} /></Link>;
            });
            setCategories(categoriesArray);
        });
        YoutubeModel.all().then((res)=>{
            const youtubeObjects = res.data.items;
            const youtubeVideos = youtubeObjects.map((obj, index)=>{
                console.log(obj.id.videoId)
                return <YouTube videoId ={obj.id.videoId} key = {index} opts = {opts}/>
            })
            setVideos(youtubeVideos);
            // console.log(youtubeObjects);
        });
    },[]);

    return (
        <main className = "community-questions">

            <div className="title container mt-4">
                <h1>Community Questions</h1>
                <div className = "filter_add_buttons">
                    <Link to="/questions/add"><button type="button" className="btn btn-secondary">Add "?"</button></Link>
                </div>
            </div>
            
            <div className= "allQuestions">
                {categories}
            </div>
            <div className = "allYoutubeVideos">
                {videos}
            </div>
            {/* <YouTube videoId = "GOd1CaAP1HU" opts = {opts}/> */}
        </main>
    );
}

export default AllQuestions;
