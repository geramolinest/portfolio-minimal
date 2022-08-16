import { MdMenu, MdOutlineClose } from "react-icons/md";
import { useMenu } from "../hooks/useMenu";

const Header = () => {

    const [ toggle, onClickMenu ] = useMenu();
    console.log(toggle)
    return (
        <header className='header-page-section'>
            {!toggle ? <MdMenu className="icon-open-menu" onClick={onClickMenu}/> : <MdOutlineClose className="icon-open-menu" onClick={onClickMenu}/>}
            <div className={ !toggle ? 'header-body-hidden' : 'header-body'}>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About Me</a></li>
                    <li><a>Stack</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div> 
        </header>
    );
}

export default Header;
