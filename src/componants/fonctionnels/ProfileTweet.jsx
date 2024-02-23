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
import closeIcon from "../../assets/icons/close.svg"
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function ProfileTweet() {

    const usernameRef = useRef();
    const bioRef = useRef();
    const bannereRef = useRef();
    const imgProfile = useRef();
    const localisationRef = useRef();
    const websiteRef = useRef();

    const [user, setUser] = useState(null);
    const [isHidden, setIsHidden] = useState(false);
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

    const handleOpen = () => {
        !isHidden ? setIsHidden(true) : setIsHidden(false);
    }

    const handleClose = () => {
        !isHidden ? setIsHidden(true) : setIsHidden(false);
    }

    const after = {
        after: "content-['_↗'] block absolute w-full h-full bg-red-400"
    }

    const uploadProfile = () => {

        const username = usernameRef.current.value;
        const bioValue = bioRef.current.value;
        const bannereValue = bannereRef.current.files[0];
        const imgProfileValue = imgProfile.current.files[0];
        const localisationValue = localisationRef.current.value;
        const websiteValue = websiteRef.current.value;


        const formBannere = new FormData();
        formBannere.append('image', bannereValue);
        const formImgProfile = new FormData();
        formImgProfile.append('image', formImgProfile);

        axios.post('http://localhost:3000/profils//:id', {
            formBannere, formImgProfile
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
    };

    return (
        <>
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
                        <div onClick={handleOpen} className="border-2 py-1 px-4 mt-4 font-bold rounded-full border-gray-500 cursor-pointer" >Editer le profil</div>
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
            <div 
                className={
                    !isHidden ? 
                        ("hidden") :
                        ("block z-50 w-screen h-screen bg-[#5b708366] absolute top-0 left-0 flex flex-col justify-center items-center")}>
                <form className="w-[690px] h-[860px] bg-black rounded-[15px] p-4">
                    <div className="flex justify-between pb-4">
                        <div className="flex items-center gap-x-8">
                            <img src={closeIcon} onClick={handleClose} alt="Retour" />
                            <p className="text-xl"> Editer le profil</p>
                        </div>
                        <input type="submit" onClick={uploadProfile} value="Enregistrer" className="bg-white text-black rounded-full px-3 py-1 font-semibold"/>
                    </div>
                    <div>
                        <label htmlFor="bannere"  className="flex flex-col h-[200px] w-full bg-[#5b708317]">
                            <img src="" alt="" />
                            <input ref={bannereRef} type="file" id="bannere" name="bannere" className="hidden" accept="image/*" />
                        </label>
                        <label htmlFor="imgProfil" className="flex relative flex-col  w-[112px] h-[112px] rounded-full -translate-y-12 translate-x-5 bg-[#5b70832d]">
                            <img src="" alt="" className="w-full h-full rounded-full absolute" />
                            <input ref={imgProfile} type="file" id="imgProfil" name="imgProfil" className="hidden" accept="image/*" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="username" className="flex flex-col justify-between border-2 border-gray-700 h-[70px] pt-[8px] px-[12px] my-3 w-full rounded">
                            <span className="text-gray-500 text-lg">username</span>
                            <input ref={usernameRef} type="text" id="username" name="username" className="bg-transparent" />
                        </label>
                        <label ref={bioRef} htmlFor="bio" className="flex flex-col justify-between border-2 border-gray-700 h-[70px] pt-[8px] px-[12px] my-3 w-full rounded">
                            <span className="text-gray-500 text-lg">Bio</span>
                            <input ref={bioRef} type="text" name="bio" id="bio" className="bg-transparent" />
                        </label>
                        <label ref={localisationRef} htmlFor="localisation" className="flex flex-col justify-between border-2 border-gray-700 h-[70px] pt-[8px] px-[12px] my-3 w-full rounded">
                            <span className="text-gray-500 text-lg">Localisation</span>
                            <input type="text" id="localisation" name="localisation" className="bg-transparent" />
                        </label>
                        <label 
                            htmlFor="website" 
                            className="flex flex-col justify-between border-2 border-gray-700 h-[70px] pt-[8px] px-[12px] my-3 w-full rounded">
                                <span className="text-gray-500 text-lg">Site web</span>
                                <input ref={websiteRef} type="text" id="website" name="website" className="bg-transparent h-[40px]" />
                        </label>
                    </div>
                    <div className="text-xl mt-8">
                        <p>Ajouter votre date de naissance</p>
                        <p>Passez en mode proffessionnnel</p>
                    </div>
                </form>
            </div>
        </>
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