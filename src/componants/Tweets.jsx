import Tweet from "./fonctionnels/Tweet";
import iconTwitter from "../assets/icons/Twitter.svg";
import iconVerified from "../assets/icons/Verified.svg";
import logoCNN from "../assets/CNN.png";


function Tweets() {
    return (
        <ul className="tweets">
           <Tweet avatarUrl={logoCNN} imgUrl={iconVerified} title="CNN"/>
           <Tweet avatarUrl={iconTwitter} imgUrl={iconVerified} title="Twitter"/>
           <Tweet avatarUrl={iconTwitter} imgUrl={iconVerified} title="Twitter"/>
           <Tweet avatarUrl={iconTwitter} imgUrl={iconVerified} title="Twitter"/>
        </ul>
    );
}

export default Tweets;