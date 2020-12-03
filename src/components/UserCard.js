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
                <h2>
                    {props.user.name}
                </h2>
            </div>
        </Link>
    );
}

export default UserCard;
