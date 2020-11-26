import React, {useState} from 'react';

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const ShowQuestion = (props) => {
    const [category, setCategory] = useState(capitalize(props.match.url.split("/")[2]));

    return (
        <div>
            This is your question about {category}
        </div>
    );
}

export default ShowQuestion;
