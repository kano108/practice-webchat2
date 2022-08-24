import React from "react";
import "./css/chat.css";
// import display from "./images/whatsapp.png"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Picker from "emoji-picker-react";
import kgf from "./images/kgf.jpg";
import { useState } from "react";
import { addData } from "./action/action";
import { useDispatch, useSelector } from "react-redux";

const Chat = () => {
  const [showImoji, setShowImoji] = useState(false);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const chatData = useSelector(
    (state) => state && state.DataReducers && state.DataReducers.list
  );

  const sendmessage = (e) => {
    e.preventDefault();
    dispatch(addData({ input }));
    setInput("");
  };

  const onEmojiClick = (event, emojiobject) => {
    setInput((predata) => predata + emojiobject.emoji);
  };
  return (
    <div className="chat">
      {/*------------ header user Name and Image start-----------------  */}
      <div className="chat_contact">
        <img src={kgf} alt="" className="header_image" />
        <span>Kishan Patel</span>
      </div>
      {/*------------ header user Name and Image close-----------------  */}

      {/*----------------- middal chat part start---------------------- */}
      <div className="chatPart">
        {chatData.map((message) => (
          <p>
            <span>{message.Name.input}</span>
          </p>
        ))}
      </div>
      {/*----------------- middal chat part close---------------------- */}

      {/*-------------- emoji and input data start------------------------ */}
      <div className="emojitextinput">
        {/* showImoji start */}
        <EmojiEmotionsIcon
          onClick={() => setShowImoji((val) => !val)}
          style={{ height: "fit-content" }}
        />
        {showImoji && <Picker onEmojiClick={onEmojiClick} />}
        {/* showImoji close */}

        <div style={{ height: "100%", width: "70%" }}>
          <form onSubmit={sendmessage}>
            <input
              type="text"
              placeholder="Type Your Message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      </div>
      {/*-------------- emoji and input data close------------------------ */}
    </div>
  );
};

export default Chat;
