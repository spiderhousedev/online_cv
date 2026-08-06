
import './Profile.css';
import profilePic from '../src/assets/me.jpeg';
import Icons from './Icons';

function Profile() {

    return (
        <>

            <div className="profile-parent">
                <div id="profile-div2" className="content-grid">
                    <img id='profile-img' alt="Profile Picture" src={profilePic}/>
                </div>
                <div id="profile-div3" className="content-grid">
                    <h1 id='profile-name'>Charlie Starling </h1>
                    <h3 id='profile-title'>Software Engineer</h3>
                </div>
                <div id="profile-div4" className="content-grid">
                    <Icons url="https://www.linkedin.com/in/charlie-starling/" name="LinkedIn"/>
                </div>
                <div id="profile-div5" className="content-grid">
                    <Icons url="https://github.com/spiderhousedev" name="GitHub"/>
                </div>
                <div id="profile-div6" className="content-grid">
                    <Icons url="mailto:contact.cstarlingdev@gmail.com" name="Email"/>
                </div>
            </div>
    
        </>
    );
}

export default Profile;