
function Wrapper({children}) {
    const style = {
        border : "3px black solid"
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;