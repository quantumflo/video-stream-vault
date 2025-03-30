import ChatMessage from "./ChatMessage";
import { PROFILEIMG } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { generateText } from "../utils/textGenerator";

const LiveChat = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      const chat = {
        profileImg: PROFILEIMG,
        name: generateText("name"),
        comment: generateText("comment"),
      };

      dispatch(addMessage(chat));
    }, 2000);

    return () => {
        clearInterval(interval);
      };
  }, []);

  const sendMessage = () => {
    dispatch(
      addMessage({ profileImg: PROFILEIMG, name: "Shashank", comment: message })
    );
    setMessage("");
  };
  return (
    <div className="h-[500px]  overflow-y-scroll w-full border border-black bg-gray-200 ml-4">
      <div>
        <div className="text-2xl font-bold m-2">LiveChat</div>
        <div className="flex flex-col-reverse">
          {chats.map((chat, index) => (
            <ChatMessage
              key={index}
              profileImg={chat.profileImg}
              name={chat.name}
              comment={chat.comment}
            />
          ))}
        </div>
      </div>
      <div className="flex-none">
        <form className="flex" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="w-full border block  border-black p-1"
            placeholder="Type your message here..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            className="bg-orange-400 rounded-r-md text-white px-4 py-2"
            onClick={sendMessage}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
