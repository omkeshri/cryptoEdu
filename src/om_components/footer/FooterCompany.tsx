// import { Link } from "react-router-dom";

const FooterCompany = () => {
  return (
    <div>
      <div className="md:block hidden">
        <h3 className="mb-8 font-medium text-md">Company</h3>
        {/* <Link to={"/"}> */}
          <p className="text-sm mb-3 transition-custom cursor-pointer">Home</p>
        {/* </Link>
        <Link to={"/about"}> */}
          <p className="text-sm mb-4 transition-custom cursor-pointer">About Us</p>
        {/* </Link>
        <Link to={"/services"}> */}
          <p className="text-sm mb-4 transition-custom cursor-pointer">Pricing Plans</p>
        {/* </Link>
        <Link to={"/doctor"}> */}
          <p className="text-sm mb-4 transition-custom cursor-pointer">What's New</p>
        {/* </Link>
        <Link to={"/contact"}> */}
          <p className="text-sm mb-4 transition-custom cursor-pointer">Blog</p>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default FooterCompany;
