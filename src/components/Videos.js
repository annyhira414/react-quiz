import classes from "../styles/Videos.module.css";
import { Link } from "react-router-dom";

import Video from "./Video";
import useVideoList from "../hooks/useVideoList";

export default function Videos() {
  const { loading, error, videos } = useVideoList(0);

  return (
    <>
      <div className={classes.videos}>
        {videos?.length > 0 &&
          videos.map((video) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={video.youtubeID}
              />
            )
          )}

        {!loading && videos.length === 0 && <div> no data found</div>}
        {error && <div>here is error</div>}
        {loading && <div>Loading...</div>}
      </div>
    </>
  );
}
