
import './Grid.css';
import Profile from '../components/Profile';
import Heading from '../components/Heading';
import Icons from '../components/Icons';
import Project from "../components/Project";
import Skills from "../components/Skills"
import Info_Card from '../components/Info';

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

                    <Skills />

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
                            description="Online toolset developed as part of a group Scrum using RTX's Hallam API."
                            image={`${import.meta.env.BASE_URL}Raytheon_Project.png`}
                            url="https://youtu.be/8O_TkUh7Emc"
                        />
                    </div>

                    <div className="project-card">
                        <Project
                            title="Inventory Management System"
                            description="Responsive website developed to manage a distribution company."
                            image={`${import.meta.env.BASE_URL}IMS_Project.png`}
                            url="https://youtu.be/u4JzaGpDFXQ"
                        />
                    </div>

                    <div className="project-card">
                        <Project
                            title="Hospital Admin System"
                            description="Website designed and developed to handle hospital booking information. "
                            image={`${import.meta.env.BASE_URL}HMS.png`}
                            url="https://youtu.be/JoxoJy-hdi0"
                        />
                    </div>

                    <div className="project-card">
                        <Project
                            title="PoC | Customer Complaint Service"
                            description="Proof of concept for a component diagram as part of a microservice architecture."
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
                    
                    <Info_Card
                        title="Spider House Sol."
                        description="Started my own custom website / online tool business. Working with real-world clients."
                        image={`${import.meta.env.BASE_URL}spider_house.png`}
                    />
                    
                    <Info_Card
                        title="Weekly Meal Planner"
                        description="Application where two friends make recipes with images and shopping lists, assign them to a day of the week."
                        image={`${import.meta.env.BASE_URL}food.png`}
                    />
                    
                    <Info_Card
                        title="This Online Resume!"
                        description="Working on new React components to use within this resume."
                        image={`${import.meta.env.BASE_URL}resume.png`}
                    />

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