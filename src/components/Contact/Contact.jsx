import { FaSquarePhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import css from "./Contact.module.css"
import clsx from "clsx";

export default function Contact({ contact: { name, number, id }, onDelete }) {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <p className={css.iconField}><FaUser className={clsx(css.icon, css.blue)} />{name}</p>
                <p className={css.iconField}><FaSquarePhone className={clsx(css.icon, css.green)} />{number}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}