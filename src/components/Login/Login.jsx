import { connect } from "react-redux" 
import { Redirect } from "react-router-dom"
import { getIsAuth } from "../../redux/selectors/profile-selectors"
import { LoginReduxForm } from "../common/ReduxForms/LoginReduxForm"
import { userLoginThunk } from "./../../redux/auth-reducer"


const Login = (props) => { 
    const onSubmit = (formData) => { 
        props.userLoginThunk(formData.email, formData.password, formData.rememberMe)
    }
    
    if (props.isAuth) return <Redirect to="/profile" />

    return ( 
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
} 

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, {userLoginThunk})(Login)