import React from 'react';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      이름 : {name}
      <br></br>
      자식 : {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'react',
};

export default MyComponent;
