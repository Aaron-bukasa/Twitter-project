import { Route, Routes } from "react-router-dom";
import Header from "../Header";
import Post from "../Profile/Post";
import Reponses from "../Profile/Reponses"
import Medias from "../Profile/Medias"
import Jaime from "../Profile/Jaime"
import Side from "./Side";
import Image from "./Image";
import Avatar from "./Avatar";
import datas from "../../assets/tweets-x.json"
import iconVerified from "../../assets/icons/Verified.svg"
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProfileTweet() {

    const [user, setUser] = useState(null)
    const address = window.location.pathname;
    const index = address.match(/\/(\d+)/)?.[0];

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/users/${index}`)
          .then((response) => {
            setUser(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    const after = {
        after: "content-['_↗'] block absolute w-full h-full bg-red-400"
    }

    return (
        <div className="max-w-screen-md w-full">
            <Header title={user?.name} />
           <div>
                <div className="w-full h-64">
                    <Image imgUrl={user?.thumbnailProfil} className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-between items-start px-4" >
                    <div className="relative bottom-16 ">
                        <div className="profil-img-Hover">
                            <ImageProfile size={150} urlProfil={user?.profil}  />
                        </div>
                    </div>
                    <Side txt="Editer le profil" />
                </div>
                <div className="-translate-y-8">
                    <div>
                        <h4 className="text-xl font-bold tracking-wider">{user?.name}</h4>
                        <div className="text-gray-400">{user?.email}</div>
                    </div>
                    <div className="mt-4">{user?.username}</div>
                    <div className="flex gap-x-5 mt-3 text-gray-400">
                        <div className="flex items-center gap-x-2">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5  h-5 fill-gray-500"><g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path></g>
                            </svg>
                            <span></span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-gray-500"><g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path></g></svg>
                            <span>{user?.Joined}</span>
                        </div>
                    </div>
                    <div className="flex">
                        <Side txt="24 abonnements" />
                        <Side txt="7 abonnés" />
                </div>
                </div>
           </div>
           <div>
                <div className="flex justify-between text-xl font-bold">
                    <Side link={`/${index}`} txt="Post" styleClass="profil-anchor" />
                    <Side link="reponses" txt="Poponses" styleClass="profil-anchor" />
                    <Side link="medias" txt="Medias" styleClass="profil-anchor" />
                    <Side link="jaime" txt="Jaime" styleClass="profil-anchor" />
                </div>
                <div className="flex justify-center">
                    <Routes>
                        <Route path={`/:${index}`} element={<Post />} />
                        <Route path="/reponses" element={<Reponses />} />
                        <Route path="/Medias" element={<Medias />} />
                        <Route path="/jaime" element={<Jaime />} />
                        <Route path="/" element={<Post />} />
                    </Routes>
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-bold">Who to follow</h3>
                    <HomeFollow />
                </div>
           </div>
        </div>
    )
}

function HomeFollow() {
    return (
        <div className="p-3 my-4 home-follow">
            <h2 className="mb-5 text-lg font-semibold">Who to follow</h2>
            <MapFollow />
            <Side link="follow" txt="Show more" styleClass="more" />
        </div>
    )
  }
  
  function MapFollow() {
    let datasLength = datas.slice(0, 5);
    return (
        <ul className="flex flex-col justify-between gap-y-3.5">
        {datasLength.map((data) => (
            <li key={data.id} className="flex justify-between">
                <div className="flex gap-x-2">
                    <div className="shrink-0">
                        <Avatar avatarUrl={data.author_avatar}/>
                    </div>
                    <div>
                        <div className="flex">
                        <span>{data.source}</span>
                        <span>
                            <img src={iconVerified} alt="verified" />
                        </span>
                        </div>
                        <div className='acount'>@{data.source}</div>
                        <p>{data.text}</p>
                    </div>
                </div>  
                <Side txt='Follow' />
            </li>
        ))}
    </ul>
    )
  }


function ImageProfile({size, urlProfil}) {
    let newSize = size ? size : 50;
    return (
        <img src={urlProfil} width={newSize} height={newSize} alt="image profil" className="rounded-full"/>
    )
}