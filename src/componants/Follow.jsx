import Avatar from './fonctionnels/Avatar';
import Image from './fonctionnels/Image';
import data from '../assets/tweetsJSON.json';
import iconVerified from '../assets/icons/Verified.svg';

function Follow() {

    const FollowContent = () => {
        return (
            <ul className="follow-content">
            {data.map((follow) => (
                <li key={follow.id}>
                    <div>
                        <Avatar avatarUrl={follow.tweetAvatarUrl}/>
                        <div>
                            <h4>{follow.author}</h4>
                            <span>
                                <Image imgUrl={iconVerified}/>
                            </span>
                            <span className='acount'>@{follow.author}</span>
                        </div>
                    </div>  
                    <button className='btn btn-follow'>
                        Follow
                    </button> 
                </li>
            ))}
        </ul>
        )
    }

    return (
        <div className="follow">
            <div className="follow-head">
                <h2>Who to follow</h2>
            </div>
            <FollowContent />
            <div className="more">Show more</div>
        </div>
    )
}

export default Follow;