import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./Dialog_item/Dialog_item";
import { CreateMessageReduxForm } from '../common/ReduxForms/CreateMessageForm';


const Dialogs = (props) => {

    //Creating map's of arrays
    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} user={d.user} />)
    let messagesElements = props.messages.map(m => <Message message={m.message} />)

    const onSubmit = (formData) => {
        props.addMessageCreator(formData.messageText)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}
                    <CreateMessageReduxForm onSubmit={onSubmit} />
                </div>
            </div>

        </div>
    );
} 

export default Dialogs;