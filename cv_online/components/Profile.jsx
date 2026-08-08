import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./Profile.css";
import Icons from "./Icons";
import { AsciiArtDemo } from "../components/Ascii_Image";

function Profile() {
    const [showAscii, setShowAscii] = useState(false);

    return (
        <div className="profile-parent">

            <div
                id="profile-div2"
                onClick={() => setShowAscii(!showAscii)}
                title="Click to switch view"
            >
                <AnimatePresence mode="wait">
                    {showAscii ? (
                        <motion.div
                            key="ascii"
                            className="profile-ascii profile-switch-content"
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.25 }}
                        >
                            <AsciiArtDemo />
                        </motion.div>
                    ) : (
                        <motion.img
                            key="photo"
                            id="profile-img"
                            className="profile-switch-content"
                            src={`${import.meta.env.BASE_URL}me.jpeg`}
                            alt="Charlie Starling"
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.25 }}
                        />
                    )}
                </AnimatePresence>

                <span className="profile-click-hint"></span>
                
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