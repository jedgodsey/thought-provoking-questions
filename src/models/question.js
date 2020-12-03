import axios from 'axios';
const url = `http://localhost:4000/questions/`;

class QuestionModel {
    static all(){
        return axios.get(url);
    }
    static categories(){
        return axios.get(`http://localhost:4000/categories/`)
    }
    static questionsByCategory(category){
        return axios.get(`http://localhost:4000/categories/${category}`)
    }
    static byId(id){
        return axios.get(`http://localhost:4000/questions/${id}`)
    }
    static addQuestion(obj){
        return axios.post(url,obj)
    }
    static update(id,obj){
        return axios.put(`http://localhost:4000/questions/${id}`,obj)
    }
    static delete(id){
        return axios.delete(`http://localhost:4000/questions/${id}`)
    }
    static findByUserId(id){
        const userId = {userId: id}
        return axios.post(`http://localhost:4000/questions/findById`,userId)
    }
}

export default QuestionModel;