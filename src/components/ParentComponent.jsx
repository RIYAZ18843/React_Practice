import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState('');

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {dataFromChild}</p>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;
