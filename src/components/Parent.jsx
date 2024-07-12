import React from 'react';
import Child from './Child';

const Parent = () => {
    const childData = (id, name) => {
        console.log("got it", id, name);
    };

    return (
        <div>
            Hello world
            <Child childData={childData} />
        </div>
    );
};

export default Parent;
