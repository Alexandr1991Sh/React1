import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })

    let messageElements = props.state.messages.map((message) => {
        return (
            <Message message={message.message}/>
        )
    })

    let newMessageElements = React.createRef();
    let addMessage = () => {
        let text = newMessageElements.current.value;
        alert(text)
    }

    return (
        <div>
            <div className={s.buttonClick}>
                <div>
                    <textarea ref={newMessageElements}/>
                </div>
                <button onClick={addMessage}>Click</button>
            </div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;