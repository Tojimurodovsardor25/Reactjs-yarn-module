import './App.css';
function Header(props) {
    return (
        <>
            <h1>{props.headerTitle}</h1>
            <p>{props.headerText}<span>{props.headerSpan}</span></p>
        </>
    );
}
export default Header;
