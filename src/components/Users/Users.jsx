import s from './Users.module.css'
import userPhotoIsNull from "../../images/avatar.png"
import { NavLink } from "react-router-dom";

const Users = (props) => {
    let pagesArray = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }

    return <div>
        <div>
            {
                pagesArray.map(p => {
                    return <span className={props.currentPage === p && s.currentPage} onClick={() => { props.onPageChanged(p) }}>{p} </span>
                })
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.avatar_image}>
                        <NavLink to={'/profile/' + u.id}>
                            <img alt='avatar' src={u.photos.small != null
                                ? u.photos.small
                                : userPhotoIsNull} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button
                                disabled={props.followingInProgress.some(followingId => followingId === u.id)}
                                onClick={() => { props.unfollowThunk(u.id) }}>Unfollow</button>

                            : <button
                                disabled={props.followingInProgress.some(followingId => followingId === u.id)}
                                onClick={() => { props.followThunk(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>u.location.country</div>
                        <div>u.location.city</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users