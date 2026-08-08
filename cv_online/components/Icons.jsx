import { SocialIcon } from "react-social-icons";

function Icons({ url }) {
    return (
        <div className="icon">
            <SocialIcon url={url} />
        </div>
    );
}

export default Icons;