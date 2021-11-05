import Profile from "./Profile";
import React from 'react'
import { connect } from "react-redux";
import { setProfileThunk } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom'
import { compose } from "redux";
import { getUserStatusThunk, putUserStatusThunk } from "./../../redux/profile-reducer"
import { getIsAuth, getProfile, getUserId, getUserStatus } from "../../redux/selectors/profile-selectors";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        
        if (!userId && this.props.isAuth){ 
            userId = this.props.authProfileId 
        } else if (!userId) this.props.history.push("/login")

        this.props.setProfileThunk(userId, this.props.authProfileId)
        this.props.getUserStatusThunk(userId) 
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} userStatus={this.props.userStatus} putUserStatusThunk={this.props.putUserStatusThunk} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        isAuth: getIsAuth(state), 
        authProfileId: getUserId(state),
        userStatus: getUserStatus(state)
    }
}

export default compose(
    connect(mapStateToProps, { setProfileThunk, getUserStatusThunk, putUserStatusThunk }),
    withRouter
)(ProfileContainer) 