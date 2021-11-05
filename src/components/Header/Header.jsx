import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img alt="logo" src='https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' />
            </div>
            <div className={s.user_auth}>
                {
                    props.isAuth
                        ? <div>{props.login} <button onClick={props.userLogoutThunk}>Logout</button></div>
                        : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>);
}

export default Header;