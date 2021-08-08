import React from 'react';

class Counter extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }
  // 생성자를 사용하지 않고도 state 설정 가능
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>

        <button
          onClick={() => {
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));

            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // 2번째 인자로 콜백 함수 등록 가능
            this.setState({ number: number + 1 }, () => {
              console.log('setState 호출');
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
