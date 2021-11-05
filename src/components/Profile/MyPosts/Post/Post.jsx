import s from './Post.module.css'

const Post = (props) => {
   return (
      <div className={s.item}>
         <div>
            <img src='https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' />
            {props.posts}
         </div>
         <div>
            {props.likes} likes
         </div>
      </div>
   );
}

export default Post;