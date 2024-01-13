import TwitterHome from './componants/TwitterHome';
import Tranding from './componants/Tranding';
import Follow from './componants/Follow';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeIcon from './assets/icons/HomeIcon.svg';
import SearchIcon from './assets/icons/SearchIcon.svg';
import ProfileIcon from './assets/icons/ProfileIcon.svg';
import NotificationsIcon from './assets/icons/NotificationsIcon.svg';
import MessageIcon from './assets/icons/MessagesIcon.svg';
import './App.css';

export default function App() {

  // const AnchorSide = () => {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path='/' element={<TwitterHome />} />
  //         <Route path='/trending' element={<Tranding />} />
  //         <Route path='/follow' element={<Follow />} />
  //       </Routes>
  //       <div className='aside-title'>
  //         <Link to='trending'>My Tranding</Link>
  //         <Link to='follow'>Follow</Link>
  //       </div>
  //     </BrowserRouter>
  //   )
  // }

  return (
   <div id='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TwitterHome />} />
          <Route path='/trending' element={<Tranding />} />
          <Route path='/follow' element={<Follow />} />
        </Routes>
        <div className='sidebar-head-mobile'>
          <div>
            <Link to='profil'>P</Link>
            <Link to='logoTwitter'>X</Link>
            <Link to='settings'>S</Link>
          </div>
          <div>
            <Link to='trending'>My Tranding</Link>
            <Link to='follow'>Follow</Link>
          </div>
        </div>
        <div className='sidebar-foot-mobile'>
          <Link to='home'>
              <HomeIcon />
          </Link>
          <Link to='search'>
            <SearchIcon />
            </Link>
          <Link to='communaute'>
            <ProfileIcon />
            </Link>
          <Link to='notification'>
            <NotificationsIcon />
            </Link>
          <Link to='message'>
            <MessageIcon />
            </Link>
        </div>
      </BrowserRouter>
      <HomeIcon />
   </div>
  )
}