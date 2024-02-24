import { useRef, useState } from "react";
import axios from "axios";
import './App.css';
import closeIcon from "../src/assets/icons/close.svg";
import twitterIcon from "../src/assets/icons/Twitter.svg"
import Home from "./componants/Home";

export default function App() {

  const emailLogRef = useRef();
  const passwordLogRef = useRef();

  const usernameRef = useRef();
  const emailSignRef = useRef();
  const passwordSignRef = useRef();

  const [isLoggedIn, setIsLoggedIn] = useState();
  const [id, setId] = useState(null);
  const [isHidden, setIsHidden] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const emailValue = emailLogRef.current.value;
      const passwordValue = passwordLogRef.current.value;

      const response = await axios.post('http://localhost:3000/auth/login', {
        email: emailValue,
        password: passwordValue,
      });

      if (response.status === 200) {
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

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const username = usernameRef.current.value;
      const emailSign = emailSignRef.current.value;
      const passwordSign = passwordSignRef.current.value;

      const response = await axios.post('http://localhost:3000/auth/signup', {
        username: username,
        email: emailSign,
        password: passwordSign
      });

      if (response.status === 200) {
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

const handleOpen = () => {
  !isHidden ? setIsHidden(true) : setIsHidden(false);
}

const handleClose = () => {
    !isHidden ? setIsHidden(true) : setIsHidden(false);
}

if (isLoggedIn) {
  return <Home id={id} />;
}

  return (
        <>
          <div className="flex h-screen w-[90%] justify-between items-center">
            <div className="w-[60%] flex justify-center">
              <img src={twitterIcon} alt="" className="w-[350px]" />
            </div>
            <form method="post" className="w-96 flex flex-col gap-y-5 justify-between items-left w-[40%]">
              <div>
                <h1 className="text-[72px] font-black tracking-wider mb-7">Ça se passe <br /> maintenant</h1>
                <h2 className="text-[42px] font-bold">Inscrivez&#8213;vous.</h2>
              </div>
              <input type="email" ref={emailLogRef} placeholder="Email address" className="block w-[450px] pl-2.5 h-16 mb-2 border-2 border border-gray-500 bg-slate-700 " />
              <input type="password" ref={passwordLogRef} placeholder="Password" className="block w-[450px] border-gray-500 h-16 pl-2.5 mb-2 border-2 border bg-slate-700" />
              <button type="submit" onClick={handleLogin} className="block w-[450px] h-16 pl-2.5 mb-2 bg-blue-400 text-center rounded-full cursor-pointer">Log in</button>
              <div className="w-[450px] text-[18px] flex justify-between">
                <div className="text-gray-600">Mot de passe oublié?</div>
                <div onClick={handleOpen} className="text-blue-300 cursor-pointer">Créer un compte</div>
              </div>
            </form>
          </div>
          <div className={!isHidden ? ("hidden") :
                ("block z-50 w-screen h-screen bg-[#5b708366] absolute top-0 left-0 flex flex-col justify-center items-center")}>
                <form className="w-[690px] h-max bg-black rounded-[15px] p-4">
                    <div className="flex justify-between pb-4">
                        <div className="flex items-center gap-x-8">
                            <img src={closeIcon} onClick={handleClose} alt="Retour" className="cursor-pointer" />
                            <p className="text-[31px] font-semibold"> Créer votre compte</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="username" className="flex flex-col justify-between border-2 border-gray-700 h-[70px] pt-[8px] px-[12px] my-3 w-full rounded">
                            <span className="text-gray-500 text-lg">Nom</span>
                            <input ref={usernameRef} type="text" id="username" name="username" className="bg-transparent" />
                        </label>
                        <label htmlFor="email" className="flex flex-col justify-between border-2 border-gray-700 h-[70px] pt-[8px] px-[12px] my-3 w-full rounded">
                            <span className="text-gray-500 text-lg">Email</span>
                            <input ref={emailSignRef} type="email" id="email" name="email" className="bg-transparent" />
                        </label>
                        <label htmlFor="password" className="flex flex-col justify-between border-2 border-gray-700 h-[70px] pt-[8px] px-[12px] my-3 w-full rounded">
                            <span className="text-gray-500 text-lg">Password</span>
                            <input ref={passwordSignRef} type="password" id="password" name="password" className="bg-transparent" />
                        </label>
                    </div>
                    <div className="text-xl mt-8">
                    <input onClick={handleSignUp} type="submit" value="Log in" className="w-full bg-blue-400 p-4 rounded-full cursor-pointer" />
                    </div>
                </form>
            </div>
        </>   
  )
}