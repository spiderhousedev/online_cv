
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

                <div id="skills-div" className="content-grid">
                    <Heading title="Skills" subtitle="Few examples, but not limited to" />
                </div>
                <div id="skill-item-1" className="content-grid">1</div>
                <div id="skill-item-2" className="content-grid">2</div>
                <div id="skill-item-3" className="content-grid">3</div>
                <div id="skill-item-4" className="content-grid">4</div>
                <div id="skill-item-5" className="content-grid">5</div>
                <div id="skill-item-6" className="content-grid">6</div>

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
                

                <div id="working-div" className="content-grid">
                    <Heading title="Current Interests" subtitle="What I'm working on" />
                </div>
                <div id="working-item-1" className="content-grid">1</div>
                <div id="working-item-2" className="content-grid">2</div>
                <div id="working-item-3" className="content-grid">3</div>
                
                <div id="contact-div" className="content-grid">
                    <Heading title="Get in Touch" subtitle="Best ways to reach me" />
                </div>
            </div>

        </>
    );
}

export default Grid;