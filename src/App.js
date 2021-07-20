import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <>
      <Wrapper>
        {/* isSpecial 에서 true 생략 시 디폴트값은 true */}
        <Hello name="react" color="red" isSpecial={true}/>
        <Hello color="yellow" />
      </Wrapper>
    </>
  );
}

export default App;
