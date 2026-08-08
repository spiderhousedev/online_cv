
import './Grid.css';
import Profile from '../components/Profile';
import Heading from '../components/Heading';

function Grid() {

    return (
        <>

            <div className="parent z-0">
                <div id="profile-div" className="content-grid">
                    <Profile />
                </div>
                <div id="about-div" className="content-grid">About / Education</div>

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
                        Project 1
                    </div>

                    <div className="project-card">
                        Project 2
                    </div>

                    <div className="project-card">
                        Project 3
                    </div>

                    <div className="project-card">
                        Project 4
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

                
                <div id="contact-div" className="content-grid">
                    <Heading title="Get in Touch" subtitle="Best ways to reach me" />
                </div>
            </div>

        </>
    );
}

export default Grid;