import { connect } from "react-redux";
import { 
    toggleFollowingInProgress,
    setUsersForMountThunk,
    setUsersOnPageChangedThunk,
    unfollowThunk,
    followThunk
} from "../../redux/users-reducer";
import Users from "./Users";
import * as React from "react";
import Preloader from "../common/Preloaders/Preloader";
import { getCurrentPage, getDefaultPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/selectors/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setUsersForMountThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage) => {
        this.props.setUsersOnPageChangedThunk(currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        defaultPage: getDefaultPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, { 
    toggleFollowingInProgress,
    setUsersForMountThunk,
    setUsersOnPageChangedThunk,
    unfollowThunk,
    followThunk
})
    (UsersContainer)