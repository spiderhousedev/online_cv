import './Project_Heading.css'

function Project_Heading ({ title  , subtitle, link}){
    return (
        <>
            <div className="section-heading">
                <h2>{title}</h2>

                {subtitle && (
                    <p>{subtitle}</p>
                )}
                {link && (
                    <a className="download-link" href={link} target="_blank" rel="noopener noreferrer">
                        Download My Resume!
                    </a>
                )}
            </div>
        </>
    );
}

export default Project_Heading;