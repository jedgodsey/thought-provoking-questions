import React, {useState} from 'react';

function Question(props){
    const [color, setColor] = useState("blue");
    const [text, setText] = useState(props.question || "What is the Meaning of Life??");

    return(
        <div className="card">
            <h5 className="card-title">{text}</h5>
        </div>
    );
}

export default Question;