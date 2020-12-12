import axios from 'axios';
const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&q=philosophy&type=video&key=AIzaSyBOq3asqGIaXEGZpBIYeiLde4tfbuDqQKE`;

class YoutubeModel {
    static all(){
        return axios.get(url);
    }
    static getVideoUrl(id){
        return (`https://www.youtube.com/watch?v=${id}`);
    }
}

export default YoutubeModel;

// https://www.youtube.com/watch?v=mHK6YmSx7YQ