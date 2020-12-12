import axios from 'axios';

const url = 'https://pure-ocean-22147.herokuapp.com/replies';

class ReplyModel {
    static all(){
        return axios.get(url);
    }
    static addByQuestionId(obj){
        return axios.post('https://pure-ocean-22147.herokuapp.com/replies/byquestion/',obj)
    }
    static update(id,obj){
        return axios.put(`https://pure-ocean-22147.herokuapp.com/replies/${id}`,obj)
    }
    static delete(id){
        return axios.delete(`https://pure-ocean-22147.herokuapp.com/replies/${id}`)
    }
}

export default ReplyModel;