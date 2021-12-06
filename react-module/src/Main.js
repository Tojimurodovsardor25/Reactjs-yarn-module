import './App.css';
function Main(props) {
    return (
        <>
            <h3>{props.mainTitle}<span>{props.mainInfo}</span></h3>
            <p>{props.mainText}</p>
        </>
    );
}
export default Main;
