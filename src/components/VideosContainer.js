import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// should I show the videos from the redux store directly or should I store in local state and then show it?
// When do I show the non-queried videos? When the user first visits the page and when user clicks on Home?

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const queriedVideos = useSelector((state) => state.queriedVideos);

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    setVideos(queriedVideos);
  }, [queriedVideos]);

  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    setVideos(data.items);
  };
  return (
    <div className="flex flex-wrap pl-4 justify-center bg-whitesmoke">
      {videos.length > 0 &&
        videos.map((video) => (
          <Link
            key={video.etag}
            to={`/watch?v=${
              typeof video.id === "string" ? video.id : video.id.videoId
            }`}
          >
            <VideoCard info={video}></VideoCard>
          </Link>
        ))}
    </div>
  );
};

export default VideosContainer;
