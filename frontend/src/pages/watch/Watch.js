import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";
import trailer from "../../video/yes.mp4";

const Watch = () => {
  const location = useLocation();
  console.log(location);
  const movie = location.movie;

  return (
    <div className="watch">
      <Link to="/" className="link">
        <div className="back">
          <ArrowBackOutlined className="arrow" />
          Home
        </div>
      </Link>
      <div className="videoTrailer">
        <video className="video" autoPlay progress controls src={trailer} />
      </div>
    </div>
  );
};

export default Watch;
