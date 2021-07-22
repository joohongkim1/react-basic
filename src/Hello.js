
// 비구조 할당
function Hello({color, name, isSpecial }) {
    // HTML 이 아닌 JSX
    return (
        <div style={{
            color,
            padding: "1rem"
        }}>
            
            {isSpecial ? <b>*</b> : null}
            {/* 단순히 보여주고 숨기고를 판별 시에는 && 연산자가 더 효율적 */}
            {isSpecial && <b>**</b>}
            {name}
        </div>
    )
}

// props 값 없을 경우 디폴트 값 지정
Hello.defaultProps = {
    name: "이름없음"
}
// Hello 컴포넌트를 내보내겠다.
export default Hello;