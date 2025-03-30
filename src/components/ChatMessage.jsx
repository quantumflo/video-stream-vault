import React from "react";

const ChatMessage = ({ profileImg, name, comment }) => {
  return (
    <div className="flex flex-row m-2 items-center">
      <img
        className="w-10 h-10 rounded-full p-2"
        src={profileImg}
        alt="commentProfile"
      />
      <p className="font-bold p-2">{name}</p>
      <p className="text-sm font-semibold">{comment}</p>
    </div>
  );
};

export default ChatMessage;
