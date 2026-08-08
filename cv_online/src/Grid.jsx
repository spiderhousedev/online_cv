
import './Grid.css';
import Profile from '../components/Profile';
import Heading from '../components/Heading';
import Icons from '../components/Icons';
import Project from "../components/Project";

function Grid() {

    return (
        <>

            <div className="parent z-0">
                <div id="profile-div" className="content-grid">
                    <Profile />
                </div>

                <div id="edu-note">
                    <Heading
                        title={
                            <>
                                BEng Software Engineering at{" "}
                                <span className="shu-text">SHU</span>
                            </>
                        }
                        subtitle="Expected to Graduate June 2027"
                    />
                </div>

                <section id="skills-section">
                    <div id="skills-heading">
                        <Heading
                            title="Skills"
                            subtitle="Few examples, but not limited to" 
                        />
                    </div>

                    <div className="skills-card">
                        Skill 1
                    </div>

                </section>

                <section id="projects-section">

                    <div id="projects-heading">
                        <Heading
                            title="Projects"
                            subtitle="Cool stuff I've made"
                        />
                    </div>

                    <div className="project-card">
                        <Project
                            title="Raytheon Sci-Toolset"
                            description="Responsive website designed and developed for a local catering business."
                            image={`${import.meta.env.BASE_URL}Raytheon_Project.png`}
                            url="https://youtu.be/8O_TkUh7Emc"
                        />
                    </div>

                    <div className="project-card">
                        <Project
                            title="Inventory Management System"
                            description="Responsive website designed and developed for a local catering business."
                            image={`${import.meta.env.BASE_URL}IMS_Project.png`}
                            url="https://youtu.be/u4JzaGpDFXQ"
                        />
                    </div>

                    <div className="project-card">
                        <Project
                            title="Hospital Admin System"
                            description="Responsive website designed and developed for a local catering business."
                            image={`${import.meta.env.BASE_URL}HMS.png`}
                            url="https://youtu.be/JoxoJy-hdi0"
                        />
                    </div>

                    <div className="project-card">
                        <Project
                            title="PoC | Customer Complaint Service"
                            description="Responsive website designed and developed for a local catering business."
                            image={`${import.meta.env.BASE_URL}Proof_of_Concept.png`}
                            url="https://youtu.be/-AHNsdHQ1EY"
                        />
                    </div>

                </section>
                
                <div id="working-section">
                    <div id="working-heading">
                        <Heading 
                            title="Current Interests" 
                            subtitle= "What I'm working on"
                        />
                    </div>
                    <div className="working-card">
                        1
                    </div>
                    <div className="working-card">
                        2
                    </div>
                    <div className="working-card">
                        3
                    </div>
                </div>

                
                <section id="contact-section">

                    <div id="contact-heading">
                        <Heading
                            title="Get in Touch"
                            subtitle="Best ways to reach me"
                        />
                    

                        <div id="contact-icons">
                            <Icons url="https://www.linkedin.com/in/charlie-starling/" />
                            <Icons url="https://github.com/spiderhousedev" />
                            <Icons url="https://instagram.com/charliestarling" />
                            <Icons url="mailto:contact.cstarlingdev@gmail.com" />
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Grid;