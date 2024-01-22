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
        <li className="flex gap-x-5 w-full py-1.5 px-5 border-b-2 border-solid border-gray-800 hover:bg-[#080808] hover:cursor-pointer">
            <div className="shrink-0">
                <Avatar avatarUrl={authorUrl}/>
            </div>
            <div className="w-full">
                <div className="flex mb-2">
                    <p>{source}</p>
                    <p>
                        {verified}
                    </p>
                    <p className="text-gray-500">
                        <span>@{source} . </span>
                        <span>{stringDate}</span>
                    </p>
                </div>
                <div>
                    <p> 
                    {text}
                    </p>
                    {urlImg}
                </div>
                <TweetActions />
            </div>
        </li>
    );
}
