# 2021-07-20 ~ React 기초부터 복습.



### 라이프사이클 메서드

- 마운트 : DOM 생성 및 웹 브라우저 출력
  - constructor : 컴포넌트 새로 만들 때마다 호출되는 클래스 생성자 메서드
    - 초기 state 를 정할 수 있음
  - getDerivedStateFromProps : props 에 있는 값을 state 에 넣을 때 사용하는 메서드
    - props 로 받아온 값을 state 에 동기화시키는 용도로 사용, 컴포넌트 마운트 및 업데이트 시 호출
  - render : 준비된 UI 를 렌더링하는 메서드
  - componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드
- 업데이트
  - 컴포넌트 업데이트하는 경우 4가지
    - props 변경
    - state 변경
    - 부모 컴포넌트 리렌더링 시
    - this.forceUpdate 로 강제로 렌더링 트리거
  - getDerivedStateFromProps : props 의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용
  - shouldComponentUpdate : 컴포넌트의 리렌더링 여부를 결정하는 메소드, true / false 반환, 특정 함수에서 this.forceUpdate 호출 시 해당 과정 생략 후 render 함수 호출
  - render : 컴포넌트 리렌더링
    - 라이프사이클 메서드 중 유일하게 필수 메서드
  - getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM 에 반영하기 직전에 호출되는 메서드
    - 주로 업데이트 직전의 값을 참고할 일이 있을 경우 사용(ex. 스크롤바 위치 유지)
  - componentDidUpdate : 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드
- 언마운트
  - componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드