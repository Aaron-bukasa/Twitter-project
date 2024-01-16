import Side from "../fonctionnels/Side";
import iconTwitter from "../../assets/icons/Twitter.svg"
import iconHome from "../../assets/icons/Home.svg"
import iconExplore from "../../assets/icons/Explore.svg"
import iconNotifications from "../../assets/icons/Notifications.svg"
import iconMessages from "../../assets/icons/Messages.svg"
import iconBookmarks from "../../assets/icons/Bookmarks.svg"
import iconLists from "../../assets/icons/Lists.svg"
import iconProfile from "../../assets/icons/Profile.svg"
import iconSearch from "../../assets/icons/Search.svg"
import iconSettings from "../../assets/icons/Settings.svg"
import iconMore2 from "../../assets/icons/More-2.svg"
import iconVerified from "../../assets/icons/Verified.svg"
import Timeline from "../Timeline";
import Footer from "../fonctionnels/Footer";
import datas from "../../assets/tweets-x.json"
import Input from "../fonctionnels/Input";
import Avatar from "../fonctionnels/Avatar";

export default function Home() {
    return ( 
        <div className="container">
            {/* <div className="sidebar">
                <Side imgUrl={iconTwitter} />
                <Side imgUrl={iconHome} txt="Home" styleClass="menu-btns" />
                <Side imgUrl={iconExplore} txt="Explore" styleClass="menu-btns" />
                <Side imgUrl={iconNotifications} txt="Notifications" styleClass="menu-btns" />
                <Side imgUrl={iconMessages} txt="Messages" styleClass="menu-btns" />
                <Side imgUrl={iconBookmarks} txt="Bookmarks" styleClass="menu-btns" />
                <Side imgUrl={iconLists} txt="Lists" styleClass="menu-btns" />
                <Side imgUrl={iconProfile} txt="Profile" styleClass="menu-btns" />
                <Side txt="Tweet" styleClass="menu-btns" />
            </div> */}
            <Timeline />
            <HomeAside />
        </div>
    )
}

function HomeAside() {
  return (
      <div className="local-aside">
          <Input 
                urlImage={iconSearch} 
                placeholderInput="Search Twitter" 
                idInput="search" />
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
                  <img src={iconMore2} alt="more" />
              </div>
          </div>
      )
  }
  
  return (
      <div className="local-tranding">
          <div className="tranding-head">
              <h3 className="tranding-head-h3">Trends for you</h3>
              <div className="tranding-head-tools">
                  <img src={iconSettings} alt="settings" />
              </div>
          </div>
          <div className="tranding-content">
              <Trand country="Turkey" title="SQUID" tweets="2,066" />
              <Trand country="Turkey" title="SQUID" tweets="2,066" />
              <Trand country="Turkey" title="SQUID" tweets="2,066" />
              <Trand country="Turkey" title="SQUID" tweets="2,066" />
          </div>
          <Side link="trending" txt="Show more" styleClass="more" />
      </div>
  )
}

const MapFollow = () => {
    let datasLength = datas.slice(0, 5);
    return (
        <ul className="follow-content">
        {datasLength.map((data) => (
            <li key={data.id}>
                <div>
                    <Avatar avatarUrl={data.author_avatar}/>
                    <div>
                        <h4>{data.source}</h4>
                        <span>
                           <img src={iconVerified} alt="verified" />
                        </span>
                        <span className='acount'>@{data.source}</span>
                    </div>
                </div>  
               <Side txt='Follow' />
            </li>
        ))}
    </ul>
    )
}

function Follow() {

    return (
        <div className="local-follow">
            <div className="follow-head">
                <h2>Who to follow</h2>
            </div>
            <MapFollow />
            <Side link="follow" txt="Show more" styleClass="more" />
        </div>
    )
}