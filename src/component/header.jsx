import { Link,useParams } from "react-router-dom";

const Header = () => {
    const {id} =  useParams();
    return (
        <div className="header_menu flex">
        <div className="flex">
          <nav  className={id==""?"bottom_border":""}><Link to="/">Jobhunt</Link></nav>
          <nav><Link to="/">Finds Jobs</Link></nav>
          <nav><Link to="/">Upskills Yourself</Link></nav>
        </div>

        <div className="flex">
        <nav className={id == "post"?"bottom_border":""}><Link to="/post">Post a Job</Link></nav>
        <nav><Link to="/">Sign In</Link></nav>
        </div>
     </div>
    );
}

export default Header;