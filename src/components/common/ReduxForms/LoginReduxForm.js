import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../utilits/validators/validators"
import { Input } from "../FormsControls/FormsControls"
import styles from "./../FormsControls/FormsControls.module.css"

const maxLength50 = maxLengthCreator(50)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="email..." name="email" component={Input} validate={[required, maxLength50]} />
            </div>
            <div>
                <Field placeholder="password..." name="password" type="password" component={Input} validate={[required, maxLength50]} />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" /> remember me
            </div>
            {
                props.error && <div className={styles.formSummaryError}>
                    <label>{props.error}</label>
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

