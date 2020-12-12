import axios from 'axios';
const url = `https://pure-ocean-22147.herokuapp.com/users/`;

class UserModel {
    static all(){
        return axios.get(url);
    }
    static byId(id){
        return axios.get(`https://pure-ocean-22147.herokuapp.com/users/${id}`)
    }
    
}

export default UserModel;