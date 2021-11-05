import React from 'react' 
import { CreatePostReduxForm } from '../../common/ReduxForms/PostReduxForm';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post posts={p.post_message} likes={p.likes} />)

    const onSubmit = (formData) => {
        props.addPostCreator(formData.postText)
    }

    return (
        <div className={s.content}>
            <div className={s.create_post}>
                <h3>My posts</h3>
                <CreatePostReduxForm onSubmit={onSubmit} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
} 

export default MyPosts;

