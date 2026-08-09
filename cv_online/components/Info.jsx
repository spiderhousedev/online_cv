import "./Info.css";

function Info_Card({ title, description, image }) {
    return (
        <div className="info">
            <div className="info-image-container">
                <img
                    className="info-image"
                    src={image}
                    alt={`${title} preview`}
                />
            </div>

            <div className="info-content">
                <h3 className="info-title">{title}</h3>

                <p className="info-description">
                    {description}
                </p>

            </div>
        </div>
    );
}

export default Info_Card;