import {addPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profile_page.posts, 
    }
} 

const MyPostsContainer = connect(mapStateToProps, {addPostCreator})(MyPosts)

export default MyPostsContainer;


