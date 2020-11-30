import axios from 'axios';

const url = 'http://localhost:4000/replies';

class ReplyModel {
    static all(){
        return axios.get(url);
    }
    static addByQuestionId(obj){
        return axios.post('http://localhost:4000/replies/byquestion/',obj)
    }
    // static addByQuestionId(questionId,reply){

    // }
}

export default ReplyModel;