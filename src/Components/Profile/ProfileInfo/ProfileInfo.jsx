import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img src='https://avatars.mds.yandex.net/i?id=b2fb3db4cbbb4292c8f4cc403f33277e-5579322-images-thumbs&n=13'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}
export default ProfileInfo;