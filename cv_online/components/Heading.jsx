import './Heading.css'

function Heading ({ title  , subtitle}){
    return (
        <>
            <div className="section-heading">
                <h2>{title}</h2>

                {subtitle && (
                    <p>{subtitle}</p>
                )}
            </div>
        </>
    );
}

export default Heading;