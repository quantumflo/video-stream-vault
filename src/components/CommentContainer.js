import React from "react";
import { PROFILEIMG } from "../constants";

const comments = [
  {
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quas.",
    replies: [
      {
        name: "Raj",
        comment: "Amazing video.",
        replies: [],
      },
    ],
  },
  {
    name: "Jane Doe",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quas.",
    replies: [],
  },
  {
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quas.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="">
      <div className="flex flex-row m-2">
        <img
          className="w-10 h-10 rounded-full"
          src={PROFILEIMG}
          alt="commentProfile"
        />
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="font-semibold">{name}</p>
            <p className="text-sm ml-2 text-gray-500">1 day ago</p>
          </div>
          <p className="text-sm">{comment}</p>
        </div>
      </div>
      <div className="ml-12 m-0">
      {<CommentList comments={replies}/>}
      </div>
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div>
      <div className="p-3 font-bold">COMMENTS:</div>
      {<CommentList comments={comments}/>}
    </div>
  );
};

const CommentList = ({comments}) => comments.length > 0 && comments.map( (comment, index) => <Comment key={index} data={comment} /> )

export default CommentContainer;
