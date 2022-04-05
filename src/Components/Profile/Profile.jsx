import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostNext} from "../Redux/State";



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts  postsData={props.profilePage.postsData}
                      addPost={props.addPost}
                      newPostText={props.profilePage.newPostText}
                      updateNewPostNext={props.updateNewPostNext}
            />
        </div>
    );
}
export default Profile;