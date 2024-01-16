import Sidebar from './Sidebar';
import Timeline from './Timeline';
import Input from './fonctionnels/Input';
import iconSearch from '../assets/icons/Search.svg';
import more2 from '../assets/icons/More-2.svg';
import settings from '../assets/icons/Settings.svg';
import Avatar from './fonctionnels/Avatar';
import Image from './fonctionnels/Image';
import datas from '../assets/tweets-x.json';
import iconVerified from '../assets/icons/Verified.svg';
import { Link } from 'react-router-dom';

export default function TwitterHome() {
  return (
   <div id='container'>
      <Sidebar />
      <Timeline />
      <LocalAside />
   </div>
  )
}

function LocalAside() {

  const Footer = () => {
      return (
          <div className="footer">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Imprint</a>
              <a href="#">Ads info</a>
              <a href="#">More ...</a>
              <span>© 2021 Twitter, Inc.</span>
          </div>
      )
  }

  return (
      <div className="local-aside">
          <Input urlImage={iconSearch} placeholderInput="Search Twitter" idInput="search" />
          <Tranding />
          <Follow />
          <Footer />
      </div>
  )
}

function Tranding() {
  function Trand({country, title, tweets}) {
      return (
          <div className='trand'>
              <div>
                  <div className='trand-info'>Tending in {country}</div>
                  <h3>#{title}</h3>
                  <div className='trand-info'>{tweets} tweets</div>
              </div>
              <div className="trand-more">
                  <img src={icon} alt="more" />
              </div>
          </div>
      )
  }
  
  return (
      <div className="local-tranding">
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
          <Link to='trending' className="more">Show more</Link>
      </div>
  )
}

function Follow() {
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

    return (
        <div className="local-follow">
            <div className="follow-head">
                <h2>Who to follow</h2>
            </div>
            <FollowContent />
            <Link to='follow' className="more">Show more</Link>
        </div>
    )
}