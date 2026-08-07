
import './Grid.css';
import Profile from '../components/Profile';

function Grid() {

    return (
        <>

            <div className="parent z-0">
                <div id="div1" className="content-grid">
                    <Profile />
                </div>
                <div id="hero1" className="content-grid">About / Education</div>
                
                <div id="div7" className="content-grid">Skills</div>
                <div id="div11" className="content-grid">8</div>
                <div id="div12" className="content-grid">9</div>

                <div id="div2" className="content-grid">Projects</div>
                <div id ="div2a" className="content-grid">2a</div>
                <div id ="div2b" className="content-grid">2b</div>
                <div id ="div2c" className="content-grid">2c</div>

                <div id="div3" className="content-grid">What I'm working on</div>
                <div id="div4" className="content-grid">4</div>
                <div id="div8" className="content-grid">5</div>
                <div id="div9" className="content-grid">6</div>
                
                <div id="div15" className="content-grid">Contact</div>
            </div>

        </>
    );
}

export default Grid;