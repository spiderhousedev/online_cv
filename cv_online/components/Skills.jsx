

import "./Skills.css";

function Skills() {
    return (
        <div className="skills-card">

            <div className="skill-group">
                <h3>Development</h3>

                <div className="skill-tags">
                    <span>JavaScript</span>
                    <span>Python</span>
                    <span>C#</span>
                    <span>PHP</span>
                    <span>HTML</span>
                    <span>CSS</span>
                </div>
            </div>

            <div className="skill-group">
                <h3>Data & Databases</h3>

                <div className="skill-tags">
                    <span>MySQL</span>
                    <span>MongoDB</span>
                    <span>Cassandra</span>
                    <span>OracleDB</span>
                    <span>SQL</span>
                </div>
            </div>

            <div className="skill-group">
                <h3>Cloud & Tools</h3>

                <div className="skill-tags">
                    <span>AWS</span>
                    <span>Azure</span>
                    <span>Docker</span>
                    <span>GitHub</span>
                    <span>Netlify</span>
                    <span>XAMPP</span>
                </div>
            </div>

            <div className="skill-group">
                <h3>Software Engineering</h3>

                <div className="skill-tags">
                    <span>REST APIs</span>
                    <span>Agile</span>
                    <span>Scrum</span>
                    <span>Testing</span>
                    <span>System Design</span>
                </div>
            </div>

        </div>
    );
}

export default Skills;