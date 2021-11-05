import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utilits/validators/validators';
import { Textarea } from '../FormsControls/FormsControls';

let maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength10]} placeholder="new post..." name={"postText"} component={Textarea} /> 
            </div>
            <div>
                <button>Post</button>
            </div>
        </form>
    )
}

export const CreatePostReduxForm = reduxForm({ form: "post" })(PostForm)
