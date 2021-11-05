import s from "./Dialog_item.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={/dialogs/ + props.id} activeClassName={s.active}>
                {props.user}
            </NavLink>
        </div>
    );
}

export default DialogItem;