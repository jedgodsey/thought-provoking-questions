import axios from 'axios';
const url = `https://pure-ocean-22147.herokuapp.com/questions/`;

class QuestionModel {
    static all(){
        return axios.get(url);
    }
    static categories(){
        return axios.get(`https://pure-ocean-22147.herokuapp.com/categories/`)
    }
    static questionsByCategory(category){
        return axios.get(`https://pure-ocean-22147.herokuapp.com/categories/${category}`)
    }
    static byId(id){
        return axios.get(`https://pure-ocean-22147.herokuapp.com/questions/${id}`)
    }
    static addQuestion(obj){
        return axios.post(url,obj)
    }
    static update(id,obj){
        return axios.put(`https://pure-ocean-22147.herokuapp.com/questions/${id}`,obj)
    }
    static delete(id){
        return axios.delete(`https://pure-ocean-22147.herokuapp.com/questions/${id}`)
    }
    static findByUserId(id){
        const userId = {userId: id}
        return axios.post(`https://pure-ocean-22147.herokuapp.com/questions/findById`,userId)
    }
}

export default QuestionModel;