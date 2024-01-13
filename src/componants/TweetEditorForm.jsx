import iconMedia from "../assets/icons/Media.svg";
import iconGif from "../assets/icons/Gif.svg";
import iconPoll from "../assets/icons/Poll.svg";
import iconEmoji from "../assets/icons/Emoji.svg";
import iconSchedule from "../assets/icons/Schedule.svg";
import Input from "./fonctionnels/Input";

function TweetEditorForm() {
    return (
        <div className="tweet-editor-form">
            
            <div className="tweet-editor-buttons">
                <Input placeholderInput="What's happening" idInput="newTweet" />
                <div>
                    <div className="tweet-editor-actions">
                        <Input typeInput='file' idInput='media' urlImage={iconMedia} />
                        <Input typeInput="file" idInput='gif'  urlImage={iconGif} />
                        <Input typeInput='file' idInput='poll' urlImage={iconPoll} />
                        <Input typeInput='file' idInput='emoji' urlImage={iconEmoji}/>
                        <Input typeInput='date' idInput='schendule' urlImage={iconSchedule}/>
                    </div>
                    <button className="btn">Tweet</button>
                </div>
            </div>
        </div>
    );
}

export default TweetEditorForm;