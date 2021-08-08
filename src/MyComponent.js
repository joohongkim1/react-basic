import React from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       이름 : {name}
//       <br></br>
//       자식 : {children}
//       <br />
//       숫자 : {favoriteNumber}
//     </div>
//   );
// };

class MyComponent extends React.Component {
  static defaultProps = {
    name: 'default name',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        이름 : {name} <br />
        숫자 : {favoriteNumber} <br />
        자식 : {children}
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: 'react',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
