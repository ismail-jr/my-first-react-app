import profilePic from './assets/serv3.jpg'
function Food(){

    const food1 = "Orange";
    const food2 = "Banana";

    
    return(
        <>
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase()}</li>
        </ul>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img className='card-img' src={profilePic} alt="profile" />

                </div>
                <div className="col-lg-6">
                <img className='card-img' src={profilePic} alt="profile" />

                </div>
            </div>

        </div>
        </>
    );
}
export default Food