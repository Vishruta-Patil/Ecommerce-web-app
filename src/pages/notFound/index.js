import "./notFound.css";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="flex-center flex-column">
      <div >
        <img className="not-found-img " src="https://res.cloudinary.com/debanftke/image/upload/v1655548358/undraw_Page_not_found_re_e9o6_nk4v7p.png" alt="404 Not Found" />
      </div>
      
        <h2 className="g-font">
          We couldn't find any matches!
        </h2>
          <Link to="/">
            <button className="btn hero-btn md-font not-found-btn">Shop Now!</button>
          </Link>
      
    </div>
  );
};