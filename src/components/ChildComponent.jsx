import React from 'react';

const ChildComponent = ({ sendDataToParent }) => {
  const sendData = () => {
    const data = 'Hello from Child!';
    sendDataToParent(data);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
