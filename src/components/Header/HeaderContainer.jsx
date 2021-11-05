import React from 'react'
import Header from "./Header";
import { connect } from "react-redux";
import { userLogoutThunk } from "../../redux/auth-reducer"; 
import { getIsAuth, getLogin } from '../../redux/selectors/login-selectors';


class HeaderContainer extends React.Component { 
    render() { 
        return (
            <Header {...this.props} />
        )
    }
} 

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
}) 

export default connect(mapStateToProps, { userLogoutThunk })(HeaderContainer) 