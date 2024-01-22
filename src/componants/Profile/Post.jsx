import loading from '../../assets/loading__.gif'

function Post() {
    return (
        <div>
            <h2 className='text-xl my-8'>mes Postes</h2>
            <div className='w-full h-52' >
                <img src={loading} className='h-full rounded' alt="" />
            </div>
        </div>
    )
}

export default Post