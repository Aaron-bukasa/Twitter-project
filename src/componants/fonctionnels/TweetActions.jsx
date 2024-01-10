import Image from "./Image";
import IconReply from "../../assets/icons/Reply.svg";
import IconRetweet from "../../assets/icons/Retweet.svg";
import IconReact from "../../assets/icons/React.svg";
import IconShare from "../../assets/icons/Share.svg";


function TweetActions() {
    
    const TweetAction = ({urlTweetAction}) => {
        return (
            <p className="tweet-action">
                <Image imgUrl={urlTweetAction}/>
                <span>0</span>
            </p>
        )
    }

    return (
        <div className="tweet-actions">
          <TweetAction urlTweetAction={IconReply}/>
          <TweetAction urlTweetAction={IconRetweet}/>
          <TweetAction urlTweetAction={IconReact}/>
          <TweetAction urlTweetAction={IconShare}/>
        </div>  
    )
}

export default TweetActions;