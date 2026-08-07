
import './Grid.css';
import Profile from '../components/Profile';

function Grid() {

    return (
        <>

            <div className="parent z-0">
                <div id="profile-div" className="content-grid">
                    <Profile />
                </div>
                <div id="about-div" className="content-grid">About / Education</div>

                <div id="skills-div" className="content-grid">Skills</div>
                <div id="skill-item-1" className="content-grid">1</div>
                <div id="skill-item-2" className="content-grid">2</div>
                <div id="skill-item-3" className="content-grid">3</div>
                <div id="skill-item-4" className="content-grid">4</div>
                <div id="skill-item-5" className="content-grid">5</div>
                <div id="skill-item-6" className="content-grid">6</div>

                <div id="projects-div" className="content-grid">Projects</div>
                <div id ="project-item-1" className="content-grid">1</div>
                <div id ="project-item-2" className="content-grid">2</div>
                <div id ="project-item-3" className="content-grid">3</div>
                <div id ="project-item-4" className="content-grid">4</div>
                

                <div id="working-div" className="content-grid">What I'm working on</div>
                <div id="working-item-1" className="content-grid">1</div>
                <div id="working-item-2" className="content-grid">2</div>
                <div id="working-item-3" className="content-grid">3</div>
                
                <div id="contact-div" className="content-grid">Contact</div>
            </div>

        </>
    );
}

export default Grid;