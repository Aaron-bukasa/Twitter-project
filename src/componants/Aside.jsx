import search from '../assets/icons/Search.svg';
import Avatar from './fonctionnels/Avatar';
import Image from './fonctionnels/Image';
import data from '../assets/tweetsJSON.json';
import iconVerified from '../assets/icons/Verified.svg';
import more2 from '../assets/icons/More-2.svg';
import settings from '../assets/icons/Settings.svg';

const Tranding = () => {
    function Trand({country, title, tweets}) {
        return (
            <div className='trand'>
                <div>
                    <div className='trand-info'>Tending in {country}</div>
                    <h3>#{title}</h3>
                    <div className='trand-info'>{tweets} tweets</div>
                </div>
                <div className="trand-more">
                    <img src={more2} alt="more" />
                </div>
            </div>
        )
    }
    
    return (
        <div className="tranding">
            <div className="tranding-head">
                <h3 className="tranding-head-h3">Trends for you</h3>
                <div className="tranding-head-tools">
                    <img src={settings} alt="settings" />
                </div>
            </div>
            <div className="tranding-content">
                <Trand country="Turkey" title="SQUID" tweets="2,066" />
                <Trand country="Turkey" title="SQUID" tweets="2,066" />
                <Trand country="Turkey" title="SQUID" tweets="2,066" />
                <Trand country="Turkey" title="SQUID" tweets="2,066" />
            </div>
            <div className="more">Show more</div>
        </div>
    )
}

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

export default function Aside() {
    return (
        <div className="aside">
            <label htmlFor="aside-input" className='aside-label'>
                <span className='aside-input-span'>
                    <img src={search} alt="search" />
                </span>
                <input type="text" id="aside-input"  placeholder="Seach Twitter"/>
            </label>
            <Tranding />
            <Follow />
            <div className="footer">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Imprint</a>
                <a href="#">Ads info</a>
                <a href="#">More ...</a>
                <span>© 2021 Twitter, Inc.</span>
            </div>
        </div>
    )
}