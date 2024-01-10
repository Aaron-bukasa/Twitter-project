import Avatar from "./Avatar";
import TweetActions from "./TweetActions";
import Image from "./Image";
import { Children } from "react";

export default function Tweet({avatarUrl, imgUrl, title, value, urlTweetImg, times}) {
    return (
        <li className="tweet">
            <Avatar avatarUrl={avatarUrl}/>
            <div className="tweet-content">
                <div className="tweet-title">
                    <p className="tweet-title-author">{title}</p>
                    <p>
                        <Image imgUrl={imgUrl}/>
                    </p>
                    <p className="tweet-title-details">
                        <span>@{title} . </span>
                        <span>{times}</span>
                    </p>
                </div>
                <div className="tweet-body">
                    <p className="tweet-text"> 
                    {value}
                    </p>
                    <div className="tweet-image">
                        <img src={urlTweetImg} alt="" />
                    </div>
                </div>
                <TweetActions />
            </div>
        </li>
    );
}
