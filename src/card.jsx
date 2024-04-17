import profilePic from './assets/serv3.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-img' src={profilePic} alt="profile picture" />
            <h2 className='title'>Jibriel Ismail</h2>
            <p className='desc'>I am a Web developer and a BSc Information technology student</p>
            <button className='btn'>Read more</button>

            
    
            </div>
       
    );
}
export default Card