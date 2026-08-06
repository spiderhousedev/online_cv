import { SocialIcon } from "react-social-icons";

function Icons({ url, name }) {
    return (
        <div className="icon">
            <SocialIcon url={url} />
        </div>
    );
}

export default Icons;