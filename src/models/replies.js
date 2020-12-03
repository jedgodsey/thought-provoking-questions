import axios from 'axios';

const url = 'http://localhost:4000/replies';

class ReplyModel {
    static all(){
        return axios.get(url);
    }
    static addByQuestionId(obj){
        return axios.post('http://localhost:4000/replies/byquestion/',obj)
    }
    static update(id,obj){
        return axios.put(`http://localhost:4000/replies/${id}`,obj)
    }
    static update(id){
        return axios.delete(`http://localhost:4000/replies/${id}`)
    }
}

export default ReplyModel;