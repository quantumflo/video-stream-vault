import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    setVideos(data.items);
  };
  return (
    <div className="flex flex-wrap pl-4 justify-center bg-whitesmoke">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
        <VideoCard info={video}></VideoCard>
        </Link>
      ))}
    </div>
  );
};

export default VideosContainer;
