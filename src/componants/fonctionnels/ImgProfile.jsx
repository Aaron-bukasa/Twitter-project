import imgProfile from "../../assets/profil_full.png"

export default function ImgProfile({size}) {

    size = size ? size : 50;

    return (
        <img src={imgProfile} width={size} height={size} alt="profile Aaron bukasa" className="rounded-full"/>
    )
}