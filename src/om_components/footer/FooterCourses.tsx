// import { Link } from "react-router-dom";

interface FooterCoursesProps {
  viewCourse: () => void;
}

const FooterCourses = ({viewCourse}: FooterCoursesProps) => {
  return (
    <div>
      <div className="lg:block hidden">
        <h3 className="mb-8 font-medium text-sm">Top Courses</h3>
        {/* <Link to={"/"}> */}
          <p className="text-sm mb-4 transition-custom cursor-pointer" onClick={viewCourse}>Course 1</p>
        {/* </Link> */}
        <p className="text-sm mb-4 cursor-pointer" onClick={viewCourse}>Course 2</p>
        {/* <Link to={"/error"}> */}
          <p className="text-sm mb-4 transition-custom cursor-pointer" onClick={viewCourse}>Course 3</p>
        {/* </Link> */}
        <p className="text-sm mb-4 cursor-pointer" onClick={viewCourse}>Course 4</p>
        {/* <Link to={"/about"}> */}
          <p className="text-sm mb-4 transition-custom cursor-pointer" onClick={viewCourse}>Course 5</p>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default FooterCourses;
