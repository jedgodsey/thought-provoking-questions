class UserChecker {
    static getUserId(obj){
        let userIdentification = ''
        // console.log(obj)
        if( typeof obj.auth.user === 'string'){
            const parsedItem = JSON.parse(obj.auth.user)
            userIdentification = parsedItem.id;
        }else{
            userIdentification = obj.auth.user._id;
        }
        return userIdentification;
    }
    static isUserLoggedIn(obj){
        console.log(obj.auth);
        if(!obj.auth.user){
            console.log("not logged in")
            return false;
        }else{
            console.log("logged in")
            return true;
        }
    } 
}

export default UserChecker;