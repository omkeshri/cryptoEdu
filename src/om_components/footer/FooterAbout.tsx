import twitter from "../../Images/TwitterLogo.png";
import facebook from "../../Images/FacebookLogo.png";
import instagram from "../../Images/InstagramLogo.png";
import github from "../../Images/GithubLogo.png";
// import { Link } from "react-router-dom";

const FooterAbout = () => {
  return (
    <div>
      <div className="w-64 md:w-56">
        <h1 className="font-medium text-4xl font-serif mt-2">Company Name</h1>
        <p className=" text-xs font-semibold mb-5">
          Tagline lorem ipsum lorem
        </p>
        <p className="text-xs mb-3 tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error, unde fuga et corporis perspiciatis itaque quos commodi officiis ullam, earum expedita voluptate iusto exercitationem. Rem illo sapiente doloremque dolores.
        </p>
        {/* <div className="flex gap-2">
          <Link to={""} target="blank">
            <img
              src={twitter}
              alt="img"
              className="w-8 mt-1 transition-custom"
            ></img>
          </Link>
          <Link to={""} target="blank">
            <img
              src={facebook}
              alt="img"
              className="w-[1.875rem] mt-1 transition-custom"
            ></img>
          </Link>
          <Link to={""} target="blank">
            <img
              src={instagram}
              alt="img"
              className="w-8 mt-1 transition-custom"
            ></img>
          </Link>
          <Link to={""} target="blank">
            <img
              src={github}
              alt="img"
              className="w-8 mt-1 transition-custom"
            ></img>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default FooterAbout;
