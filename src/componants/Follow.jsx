import Avatar from './fonctionnels/Avatar';
import Image from './fonctionnels/Image';
import datas from '../assets/tweets-x.json';
import iconVerified from '../assets/icons/Verified.svg';

const FollowContent = () => {
    return (
        <ul className="follow-content">
        {datas.map((data) => (
            <li key={data.id}>
                <div>
                    <Avatar avatarUrl={data.author_avatar}/>
                    <div>
                        <h4>{data.source}</h4>
                        <span>
                            <Image imgUrl={iconVerified}/>
                        </span>
                        <span className='acount'>@{data.source}</span>
                    </div>
                </div>  
                <button className='btn-follow'>
                    Follow
                </button> 
            </li>
        ))}
    </ul>
    )
}
function Follow() {

    return (
        <div className="follow">
            <div className="follow-head">
                <h2>Who to follow</h2>
            </div>
            <FollowContent />
        </div>
    )
}

export default Follow;