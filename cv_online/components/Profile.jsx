
import './Profile.css';
import profilePic from '../src/assets/me.jpeg';

function Profile() {

    return (
        <>

            <div className="profile-parent">
                <div id="profile-div2" className="content-grid">
                    <img id='profile-img' alt="Profile Picture" src={profilePic}/>
                </div>
                <div id="profile-div3" className="content-grid">3</div>
                <div id="profile-div4" className="content-grid">4</div>
                <div id="profile-div5" className="content-grid">5</div>
                <div id="profile-div6" className="content-grid">6</div>
            </div>
    
        </>
    );
}

export default Profile;