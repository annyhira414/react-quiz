import classes from "../styles/Videos.module.css";
import { Link } from "react-router-dom";

import Video from "./Video";
import useVideoList from "../hooks/useVideoList";

export default function Videos() {
  const { loading, error, videos } = useVideoList;
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to="/quiz" key={videos.youtubeID}>
            <Video titel={video.titel} id={video.youtubeID} noq={video.noq} />
          </Link>
        ))}

      {!loading && videos.length === 0 && 
       <div> no data found</div>}
      {error && <div>here is error</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
