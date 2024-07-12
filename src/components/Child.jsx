import React from 'react';

const Child = (props) => {
    return (
        <div>
            Child <br />
            <button onClick={() => props.childData("35000", "Riyaz")}>click here</button>
        </div>
    );
};

export default Child;
