import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const videoId = params.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="p-14 w-full">
      <div className="flex">
        <div>
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        </div>
          <LiveChat />
      </div>
      <div>
      <CommentContainer />
      </div>
    </div>
  );
};

export default WatchVideo;
