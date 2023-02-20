import '../css/header.css'
const Header = (props) => {
    return (
        <nav>
            <img src={props.header.imgUrl} alt={props.header.title} className="nav_img" />
            <h1 className="nav_title">{props.header.title}</h1>
        </nav>
    )
}
export default Header;