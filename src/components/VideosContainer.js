import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../constants";
import VideoCard from "./VideoCard";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    console.log("api", YOUTUBE_API);

    console.log(data.items);
    setVideos(data.items);
  };
  console.log("ENV", process.env.REACT_APP_YOUTUBE_API_KEY);
  return (
    <div>
      {videos.map((video) => {
        <VideoCard info={video}></VideoCard>;
      })}
    </div>
  );
};

export default VideosContainer;
