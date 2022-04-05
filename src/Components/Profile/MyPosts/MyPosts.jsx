import Post from "./Post/Post";
import s from './MyPosts.module.css';
import React from "react";
import {updateNewPostNext} from "../../Redux/State";

const MyPosts = (props) => {

    let postsElements = props.postsData.map((post) =>{
        return(
            <Post message={post.message} likesCounts={post.likesCounts}/>
        )
    })
    let newPostElement = React.createRef();
    let addPost = ()=>{
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostNext(text)
    }

    return (
        <div>
            <div className={s.postsBlock}>
               <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={ newPostElement } onChange={onPostChange}  value={props.newPostText}/>
                    </div>
                    <div>
                        <button  onClick={ addPost }>Add post</button>
                    </div>
                </div>
            </div>

            <div className={s.posts}>

                { postsElements }

            </div>
        </div>
    );
}
export default MyPosts;