import s from "./Profile_description.module.css";
import Preloader from "../../common/Preloaders/Preloader";
import UserStatus from "./UserStatus.jsx"
import noPhotoUser from "./../../../images/avatar.png"


const ProfileDescription = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profile_description}>
            <div className={s.bgImage}>
                <img src='https://i.ucrazy.ru/files/i/2007.6.29/desert_rocks.jpg'></img>
            </div>
            <div className={s.user_info}>
                <div className={s.user_photo_name}>
                    <img alt='noPhotoUser' src={props.profile.photos.large === null ? noPhotoUser : props.profile.photos.large} />
                    {props.profile.fullName}
                </div>

                <div className={s.user_status}>
                    <h4>Статус:</h4>
                    <UserStatus userStatus={props.userStatus} putUserStatusThunk={props.putUserStatusThunk} />
                </div>
                
                <div className={s.user_about}>
                    <h4>Обо мне:</h4>
                    <div>{props.profile.aboutMe}</div>
                </div>
                <div className={s.user_job_about}>
                    <h4>Поиск работы:</h4>
                    <div>{props.profile.lookingForAJobDescription}</div>
                </div>
                <div className={s.user_contacts_list}>
                    <h4>Контакты:</h4>
                    <ul>
                        {
                            Object.keys(props.profile.contacts).map(key => {
                                if (props.profile.contacts[key] !== null) {
                                    return <li>{key + ':  ' + props.profile.contacts[key]}</li>
                                } else return null
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileDescription;