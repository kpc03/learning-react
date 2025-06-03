import { useState } from 'react';

const User = ({name, designation, department, origin}) => {
    const [count] = useState(0);
    const [count2] = useState(2);
    return(
        <div className="user-card">
            <img src="https://placehold.co/300x250" alt={name}/>
            <h2>Name: {name}</h2>
            <h2>Designation: {designation}</h2>
            <h2>Department: {department}</h2>

            <p style={{marginTop: "6px"}}>{origin}</p>
            <p>Count: {count}</p>
            <p>Count: {count2}</p>
        </div>
    );
}

export default User;