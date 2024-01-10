import Image from "./fonctionnels/Image";
import iconMedia from "../assets/icons/Media.svg";
import iconGif from "../assets/icons/Gif.svg";
import iconPoll from "../assets/icons/Poll.svg";
import iconEmoji from "../assets/icons/Emoji.svg";
import iconSchedule from "../assets/icons/Schedule.svg";

function TweetEditorForm() {
    return (
        <div className="tweet-editor-form">
            <input className="tweet-editor-input" type="text" placeholder="What's happening?"/>
            <div className="tweet-editor-buttons">
                <div className="tweet-editor-actions">
                    <Image imgUrl={iconMedia}/>
                    <Image imgUrl={iconGif}/>
                    <Image imgUrl={iconPoll}/>
                    <Image imgUrl={iconEmoji}/>
                    <Image imgUrl={iconSchedule}/>
                </div>
                <button className="button">Tweet</button>
            </div>
        </div>
    );
}

export default TweetEditorForm;