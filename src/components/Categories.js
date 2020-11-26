import React, {useState} from 'react';

const Categories = (props) => {
    const [category, setCategory] = useState(props.category ||"Ethical");

    return (
        <div className = "card">
            <h2>{category}</h2>
        </div>
    );
}

export default Categories;
