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
}

export default QuestionModel;