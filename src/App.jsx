import Explore from "./componants/sidebar/Explore";
import Notifications from "./componants/sidebar/Notifications"
import Messages from "./componants/sidebar/Messages"
import Bookmarks from "./componants/sidebar/Bookmarks"
import Lists from "./componants/sidebar/Lists"
import Profile from "./componants/sidebar/Profile"
import More from "./componants/sidebar/More"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Sidebar from './componants/Sidebar';
import Footer from './componants/fonctionnels/Footer';
import Side from './componants/fonctionnels/Side';
import Input from './componants/fonctionnels/Input';
import iconSearch from './assets/icons/Search.svg';
import Timeline from './componants/Timeline';
import './App.css';
import more2 from './assets/icons/More-2.svg';
import settings from './assets/icons/Settings.svg';
import iconVerified from "./assets/icons/Verified.svg"
import datas from "./assets/tweets-x.json"
import Avatar from "./componants/fonctionnels/Avatar";
import { UserProfil } from "./componants/Tweets";


export default function App() {
  return (
   <div id='container' className="flex justify-center relative">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Timeline />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/notifications' element={<Notifications/>} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/bookmarks' element={<Bookmarks />} />
          <Route path='/lists' element={<Lists />} />
          <Route path='/bukasa_mba/*' element={<Profile />} />
          <Route path='/more' element={<More />} />
          {/* <Route path='/user_profil/*' element={<TweetsProfil />} /> */}
          <Route path="/userProfil/*" element={<UserProfil />} />
        </Routes>
        <div className="hidden min-w-342px max-w-380px ml-5 mt-5 home-aside fixed top-0">
          <div className='home-aside-head'>
            <Input urlImage={iconSearch} placeholderInput="Search Twitter" idInput='search' />
          </div>
          <div className="">
            <HomeTranding />
            <HomeFollow />
          </div>
            <Footer />
        </div>
      </BrowserRouter>
   </div>
  )
}

function HomeTranding() {    
    return (
        <div className="bg-[#16181c] rounded-2xl my-3">
            <div className="flex justify-between mb-4 p-2">
                <h3 className="text-lg font-semibold">Trends for you</h3>
                <div>
                    <img src={settings} alt="settings" />
                </div>
            </div>
            <div className="flex flex-col justify-between gap-y-2.5">
                <Trand country="Turkey" title="SQUID" tweets="2,066" />
                <Trand country="Turkey" title="SQUID" tweets="2,066" />
                <Trand country="Turkey" title="SQUID" tweets="2,066" />
                <Trand country="Turkey" title="SQUID" tweets="2,066" />
            </div>
            <div className="px-2 pb-4">
              <Side link="tranding" txt="Show more" styleClass="more" />
            </div>
        </div>
    )
}

function Trand({country, title, tweets}) {
  return (
      <div className='flex justify-between hover:bg-[#1d1f23] cursor-pointer p-3'>
          <div>
              <div className='text-gray-400'>Tending in {country}</div>
              <h3>#{title}</h3>
              <div className='text-gray-400'>{tweets} tweets</div>
          </div>
          <div className="trand-more">
              <img src={more2} alt="more" />
          </div>
      </div>
  )
}

function HomeFollow() {
  return (
      <div className="bg-[#16181c] rounded-2xl my-4 home-follow">
          <h2 className="mb-5 p-2 text-lg font-semibold">Who to follow</h2>
          <MapFollow />
          <div className="px-2 py-4">
            <Side link="follow" txt="Show more" styleClass="more" />
          </div>
      </div>
  )
}

function MapFollow() {
  let datasLength = datas.slice(0, 4);
    return (
        <ul className="flex flex-col justify-between gap-y-3.5">
        {datasLength.map((data) => (
            <li key={data.id} className="flex justify-between items-center hover:bg-[#1d1f23] cursor-pointer p-2">
                <div className="flex gap-x-2">
                    <Avatar avatarUrl={data.author_avatar} />
                    <div>
                      <div className="flex">
                        <span>{data.source}</span>
                        <span>
                           <img src={iconVerified} alt="verified" />
                        </span>
                      </div>
                        <div className='acount'>@{data.source}</div>
                    </div>
                </div>  
               <Side txt='Follow' />
            </li>
        ))}
    </ul>
    )
}