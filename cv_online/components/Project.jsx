import "./Project.css";

function Project({ title, description, image, url }) {
    return (
        <a
            className="project"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="project-image-container">
                <img
                    className="project-image"
                    src={image}
                    alt={`${title} preview`}
                />
            </div>

            <div className="project-content">
                <h3 className="project-title">{title}</h3>

                <p className="project-description">
                    {description}
                </p>

                <span className="project-link">
                    View Project ↗
                </span>
            </div>
        </a>
    );
}

export default Project;