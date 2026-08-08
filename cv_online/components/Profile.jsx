import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./Profile.css";
import Icons from "./Icons";
import { AsciiArtDemo } from "../components/Ascii_Image";


const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";


function ScrambleText({ text, encrypted, speed = 35 }) {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let iteration = 0;

        const randomCharacter = () => {
            return characters[
                Math.floor(Math.random() * characters.length)
            ];
        };

        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((character, index) => {

                        // Keep spaces unchanged
                        if (character === " ") {
                            return " ";
                        }

                        // ENCRYPTING
                        if (encrypted) {
                            // Characters we've reached stay scrambled
                            if (index < iteration) {
                                return randomCharacter();
                            }

                            // Characters we haven't reached yet stay real
                            return character;
                        }

                        // DECRYPTING
                        // Characters we've reached become real
                        if (index < iteration) {
                            return character;
                        }

                        // Remaining characters stay scrambled
                        return randomCharacter();
                    })
                    .join("")
            );

            iteration += 0.5;

            if (iteration >= text.length) {
                clearInterval(interval);

                if (encrypted) {
                    // Finish fully encrypted
                    setDisplayText(
                        text
                            .split("")
                            .map((character) =>
                                character === " "
                                    ? " "
                                    : randomCharacter()
                            )
                            .join("")
                    );
                } else {
                    // Finish fully decrypted
                    setDisplayText(text);
                }
            }
        }, speed);

        return () => clearInterval(interval);

    }, [encrypted, text, speed]);

    return <>{displayText}</>;
}


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
                            initial={{
                                opacity: 0,
                                scale: 0.92,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.92,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
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
                            initial={{
                                opacity: 0,
                                scale: 0.92,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.92,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                        />
                    )}
                </AnimatePresence>

                <span className="profile-click-hint"></span>
            </div>


            <div id="profile-div3">

                <h1 id="profile-name">
                    <ScrambleText
                        text="Charlie Starling"
                        encrypted={showAscii}
                        speed={35}
                    />
                </h1>

                <h3 id="profile-title">
                    <ScrambleText
                        text="Software Engineer"
                        encrypted={showAscii}
                        speed={35}
                    />
                </h3>

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