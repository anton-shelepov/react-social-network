import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileDescription from "./Description/Profile_description"; 

const Profile = (props) => { 

    return (
        <div>
            <ProfileDescription profile={props.profile} userStatus={props.userStatus} putUserStatusThunk={props.putUserStatusThunk}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;