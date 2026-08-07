import { useState } from "react";
import "./Profile.css";
import Icons from "./Icons";
import { AsciiArtDemo } from '../components/Ascii_Image';

function Profile() {
    const [showAscii, setShowAscii] = useState(false);

    return (
        <div className="profile-parent">

            <div
                id="profile-div2"
                onClick={() => setShowAscii(!showAscii)}
            >
                {showAscii ? (
                    <div className="profile-ascii">
                        <AsciiArtDemo />
                    </div>
                ) : (
                    <img
                        id="profile-img"
                        src={`${import.meta.env.BASE_URL}me.jpeg`}
                        alt="Charlie Starling"
                    />
                )}
            </div>

            <div id="profile-div3">
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
    );
}

export default Profile;