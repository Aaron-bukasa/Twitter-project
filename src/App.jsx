import Home from './componants/sidebar/Home';
import Explore from "./componants/sidebar/Explore";
import Notifications from "./componants/sidebar/Notifications"
import Messages from "./componants/sidebar/Messages"
import Bookmarks from "./componants/sidebar/Bookmarks"
import Lists from "./componants/sidebar/Lists"
import Profile from "./componants/sidebar/Profile"
import More from "./componants/sidebar/More"
import Tranding from './componants/Tranding';
import Follow from './componants/Follow';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Avatar from './componants/fonctionnels/Avatar';
import ProfileIcon from './assets/profil_full.png'
import './App.css';
import Header from './componants/Header';
import Aside from './componants/Aside';
import Sidebar from './componants/Sidebar';
import Footer from './componants/fonctionnels/Footer';
import Side from './componants/fonctionnels/Side';
import Input from './componants/fonctionnels/Input';
import iconSearch from './assets/icons/Search.svg';
import Timeline from './componants/Timeline';

export default function App() {

  return (
   <div id='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Timeline />} />
          {/* <Route path='/explore' element={<Explore />} />
          <Route path='/notifications' element={<Notifications/>} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/bookmarks' element={<Bookmarks />} />
          <Route path='/lists' element={<Lists />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/more' element={<More />} /> */}
          <Route path='/sidebar' element={<Sidebar />} />
        </Routes>
        <div>
          <Sidebar />
          <div className="home-pg-aside">
            <div className='home-pg-aside-head'>
              <Input urlImage={iconSearch} placeholderInput="Search Twitter" />
            </div>
            <div className="home-pg-aside-content">
                <div>
                  <Tranding />
                  <Side link="tranding" txt="Show more" />
                </div>
                <div>
                  <Follow />
                  <Side link="follow" txt="Show more" />
                </div>
            </div>
            <div className='home-pg-aside-foot'>
                <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
   </div>
  )
}