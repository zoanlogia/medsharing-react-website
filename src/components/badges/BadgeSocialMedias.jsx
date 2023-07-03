import { Link } from "react-router-dom";
import linkedin from "@/assets/images/linkedin.svg";

const BadgeSocialMedias = () => {
  return (
    <div className="badge-social-media w-[200px] h-[50px] rounded-t-xl bg-primary absolute bottom-0 left-20">
        <div className="flex items-center justify-center h-full">
            <Link to={"https://www.linkedin.com/company/medsharing/?isFollowingPage=true"}>
            <img className="" src={linkedin} alt="linkedin" />
            </Link>
        </div>
    </div>
  );
};

export default BadgeSocialMedias;
