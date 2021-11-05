import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utilits/validators/validators';
import { Textarea } from '../FormsControls/FormsControls';

const maxLength20 = maxLengthCreator(20)

const CreateMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="new message..." name={"messageText"} component={Textarea} validate={[required, maxLength20]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const CreateMessageReduxForm = reduxForm({ form: "createMessage" })(CreateMessageForm)
