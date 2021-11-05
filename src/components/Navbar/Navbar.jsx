import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    //let friend_element = props.state.map(f => (<Friend friend_name={f.friend_name}/>)) TODO

    return (
        <div className={s.sidebar}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
                </div>
            </nav>
            <div className={s.friends}>
                TODO {/*{friend_element}*/}
            </div>
        </div>
    );
}

export default Navbar;