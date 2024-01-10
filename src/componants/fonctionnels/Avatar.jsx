const Avatar = ({avatarUrl}) => {
    return (
        <div>
            <img src={avatarUrl} alt="profil tweet" className="avatar" width={200} height={200}/>
        </div>
    )
}

export default Avatar;