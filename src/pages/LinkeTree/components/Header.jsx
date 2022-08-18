import { MdMenu, MdOutlineClose } from "react-icons/md";
import { useMenu } from "../hooks/useMenu";
import 'animate.css';

const Header = () => {

    const [ toggle, onClickMenu ] = useMenu();
    console.log(toggle)
    return (
        <header className='header-page-section'>
            {!toggle ? <MdMenu className="icon-open-menu" onClick={onClickMenu}/> : <MdOutlineClose className="icon-open-menu" onClick={onClickMenu}/>}
            <div className={ !toggle ? 'header-body-hidden animate__animated animate__fadeInUp' : 'header-body animate__animated animate__fadeInDown'}>
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
