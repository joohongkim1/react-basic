import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
  };

  constructor(props) {
    super(props);

    // 함수 호출 시 메서드와 this 의 관계가 끊어짐
    // this 를 컴포넌트 자신으로 가리키기 위해 바인딩 작업 필요
    // 바인딩하지 않는 경우 this -> undefined 를 가리키게 된다.
    // 메소드 생성 시마다 바인딩을 해줘야 하기 때문에 바벨의 transform-class-properties 문법을 사용
    // 화살표 함수 형태로 메서드 형태를 정의하면 바인딩 작업 필요X
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      // 객체 안에서 key 를 [] 로 감싸면 그 안의 레퍼런스가 가리키는 실제 값이 key 값이 된다.
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ' / ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="text 입력"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>초기화</button>
      </div>
    );
  }
}

export default EventPractice;
