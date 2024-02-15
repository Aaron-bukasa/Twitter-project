import Avatar from "./Avatar";
import TweetActions from "./TweetActions";
import Image from "./Image";
import iconVerified from "../../assets/icons/Verified.svg"
import { Link } from "react-router-dom";

export default function Tweet(props) {

    const newDate = new Date();
    const stringDate = newDate.toLocaleString();
    const verified = props.isVerified && <Image imgUrl={iconVerified}/>;
    const urlImg = props.urlTweetImg ? 
            <div className="tweet-image">
                <img src={props.urlTweetImg} alt="Image tweet" />
            </div> : 
            <div className="tweet-image" style={{display: "none"}}>
                <img src={props.urlTweetImg} alt="Image tweet" />
            </div>
    return (
        <div className="flex gap-x-5 w-full py-1.5 px-5 border-b-2 border-solid border-gray-800 hover:bg-[#080808] hover:cursor-pointer" >
            <div className="shrink-0 avatar-tweet" data-id={props.id} >
                <Link to={`userprofil/${props.id}`}>
                    <Avatar avatarUrl={props.authorUrl} />
                </Link>               
            </div>
            <div className="w-full">
                <div className="flex mb-2">
                    <p>{props.source} </p>
                    <p>
                        {verified}
                    </p>
                    <p className="text-gray-500">
                        <span>{props.email}</span>
                        <span> {props.date}</span>
                    </p>
                </div>
                <div>
                    <p> 
                    {props.text}
                    </p>
                    {urlImg}
                </div>
                <TweetActions like={props.like} repost={props.repost} comment={props.comment} />
            </div>
        </div>
    );
}