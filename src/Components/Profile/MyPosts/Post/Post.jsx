import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://avatars.mds.yandex.net/i?id=b9b49d265c15cd02a1aa0112a1306469-5286930-images-thumbs&n=13'/>
            {props.message}

            <div>
                <span>
                    like
                    {props.likesCounts}
                </span>
            </div>

        </div>
    );
}
export default Post;