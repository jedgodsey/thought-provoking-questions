import axios from 'axios';
const url = `http://localhost:4000/users/`;

class UserModel {
    static all(){
        return axios.get(url);
    }
    static byId(id){
        return axios.get(`http://localhost:4000/users/${id}`)
    }
    
}

export default UserModel;