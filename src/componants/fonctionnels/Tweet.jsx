import Avatar from "./Avatar";
import TweetActions from "./TweetActions";
import Image from "./Image";
import iconVerified from "../../assets/icons/Verified.svg"

export default function Tweet({authorUrl, isVerified, source, urlTweetImg, date, text}) {

    const newDate = new Date(date);
    const stringDate = newDate.toLocaleString();
    const verified = isVerified && <Image imgUrl={iconVerified}/>;
    const urlImg = urlTweetImg ? 
            <div className="tweet-image">
                <img src={urlTweetImg} alt="Image tweet" />
            </div> : 
            <div className="tweet-image" style={{display: "none"}}>
                <img src={urlTweetImg} alt="Image tweet" />
            </div>

    return (
        <li className="tweet">
            <Avatar avatarUrl={authorUrl}/>
            <div className="tweet-content">
                <div className="tweet-title">
                    <p className="tweet-title-author">{source}</p>
                    <p>
                        {verified}
                    </p>
                    <p className="tweet-title-details">
                        <span>@{source} . </span>
                        <span>{stringDate}</span>
                    </p>
                </div>
                <div className="tweet-body">
                    <p className="tweet-text"> 
                    {text}
                    </p>
                    {urlImg}
                </div>
                <TweetActions />
            </div>
        </li>
    );
}
