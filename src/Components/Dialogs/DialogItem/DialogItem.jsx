import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src="https://avatars.mds.yandex.net/i?id=6d867d00f1b6563b6112e7485c928049-5661421-images-thumbs&n=13" alt=""/>

            <NavLink to={'/dialogs/' + props.id} className={s.string}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;