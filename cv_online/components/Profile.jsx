
import './Profile.css';
import Icons from './Icons';

function Profile() {

    return (
        <>

            <div className="profile-parent">
                <div id="profile-div2" className="content-grid">
                    <img
                        id="profile-img"
                        src={`${import.meta.env.BASE_URL}me.jpeg`}
                        alt="Charlie Starling"
                    />
                </div>

                <div id="profile-div3" className="content-grid">
                    <h1 id="profile-name">Charlie Starling</h1>
                    <h3 id="profile-title">Software Engineer</h3>
                </div>

                <div id="profile-socials">
                    <Icons url="https://www.linkedin.com/in/charlie-starling/" />
                    <Icons url="https://github.com/spiderhousedev" />
                    <Icons url="https://instagram.com/charliestarling" />
                    <Icons url="mailto:contact.cstarlingdev@gmail.com" />
                </div>
            </div>
    
        </>
    );
}

export default Profile;