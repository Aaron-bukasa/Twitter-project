import Explore from "./componants/sidebar/Explore";
import Notifications from "./componants/sidebar/Notifications"
import Messages from "./componants/sidebar/Messages"
import Bookmarks from "./componants/sidebar/Bookmarks"
import Lists from "./componants/sidebar/Lists"
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
import ProfileTweet from "./componants/fonctionnels/ProfileTweet";
import { useRef, useState } from "react";
import axios from "axios";

export default function App() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const emailValue = emailRef.current.value;
      const passwordValue = passwordRef.current.value;

      const response = await axios.post('http://localhost:3000/auth/login', {
        email: emailValue,
        password: passwordValue,
      });

      if (response.status === 200) {
        console.log(response.data);
        const { userId, token } = response.data;
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        setId(userId);
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  return (
    <div>
      {!isLoggedIn ? (<div className="h-screen flex flex-col justify-center items-center">
    <form method="post" className="w-96 h-[476px] flex flex-col justify-between">
      <div>
        <div>
              <svg width="50" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.643 4.937C22.808 5.307 21.911 5.557 20.968 5.67C21.93 5.094 22.668 4.18 23.016 3.092C22.116 3.626 21.119 4.014 20.058 4.222C19.208 3.318 17.998 2.752 16.658 2.752C14.086 2.752 12 4.838 12 7.412C12 7.776 12.042 8.13 12.12 8.472C8.24701 8.277 4.81601 6.422 2.51801 3.604C2.11801 4.294 1.88801 5.094 1.88801 5.946C1.88801 7.562 2.71101 8.989 3.96001 9.824C3.19601 9.799 2.47801 9.59 1.85001 9.241V9.301C1.85001 11.558 3.45501 13.441 5.58701 13.869C5.19501 13.975 4.78401 14.031 4.36001 14.031C4.06001 14.031 3.76701 14.003 3.48301 13.949C4.07601 15.799 5.79601 17.147 7.83501 17.183C6.24001 18.433 4.23101 19.178 2.04901 19.178C1.67301 19.178 1.30201 19.156 0.937012 19.113C2.99901 20.436 5.44701 21.206 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.952C21.332 7.752 21.327 7.55 21.318 7.35C22.228 6.692 23.018 5.873 23.641 4.94L23.643 4.937Z" fill="#1D9BF0"/>
              </svg>
        </div>
        <h1 className="text-[42px]">Log in to Twitter</h1>
      </div>
      <input type="email" ref={emailRef} placeholder="Email address" className="block w-[450px] pl-2.5 h-16 mb-2 border-2 border border-gray-500 bg-slate-700 " />
      <input type="password" ref={passwordRef} placeholder="Password" className="block w-[450px] border-gray-500 h-16 pl-2.5 mb-2 border-2 border bg-slate-700" />
      <button type="submit" onClick={handleLogin} className="block w-[450px] h-16 pl-2.5 mb-2 bg-blue-400 text-center rounded-full cursor-pointer">Log in</button>
      <div className="w-[450px] text-[18px] flex justify-between">
        <a href="#" className="text-blue-300">Forgot password?</a>
        <a href="#" className="text-blue-300">Sign up to Twitter</a>
      </div>
    </form>
  </div>) : (
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
          <Route path='/more' element={<More />} />
          <Route path="/userprofil/*" element={<ProfileTweet />} />
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
    )}
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