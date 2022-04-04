import Post from "./Post/Post";
import s from './MyPosts.module.css';
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.postsData.map((post) =>{
        return(
            <Post message={post.message} likesCounts={post.likesCounts}/>
        )
    })
    let newPostElement = React.createRef();
    let addPost = ()=>{
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value = '';
    }

    return (
        <div>
            <div className={s.postsBlock}>
               <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={ newPostElement }/>
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