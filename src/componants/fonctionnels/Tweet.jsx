import Avatar from "./Avatar";
import TweetActions from "./TweetActions";
import Image from "./Image";

export default function Tweet({avatarUrl, imgUrl, title}) {
    return (
        <li className="tweet">
            <Avatar avatarUrl={avatarUrl}/>
            <div className="tweet-content">
                <div className="tweet-title">
                    <p className="tweet-title-author"></p>
                    <p>
                        <Image imgUrl={imgUrl}/>
                    </p>
                    <p className="tweet-title-details">{title}</p>
                </div>
                <div className="tweet-body">
                    <p className="tweet-text"> 
                    President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.
                    </p>
                    <div className="tweet-image">
                        <img src="" alt=""  />
                    </div>
                </div>
                <TweetActions />
            </div>
        </li>
    );
}
