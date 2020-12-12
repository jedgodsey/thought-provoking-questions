import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

const UserCard = (props) => {
    // const [user, setUser] = useState(props.us);
    useEffect(()=>{
        console.log(props.user.name)
    },[])

    return (
        <Link to={`/users/${props.user._id}`}>
            <div>
                <h4>
                    {props.user.name}
                </h4>
            </div>
        </Link>
    );
}

export default UserCard;
