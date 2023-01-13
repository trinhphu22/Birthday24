import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import Modal from "../helper/Modal";

const SendMessage = ({ visible, hide }) => {
  const [message, setMessage] = useState("");

  const clearInputs = () => {
    setMessage("");
  };

  const handleSend = async () => {
    const collectionRef = collection(db, "Message");
    const payload = {
      message: message,
      miss:
        message.toLowerCase().indexOf("nhớ", 0) >= 0 ||
        message.toLowerCase().indexOf("miss you", 0) >= 0 ||
        message.toLowerCase().indexOf("yêu", 0) >= 0 ||
        message.toLowerCase().indexOf("love you", 0) >= 0,
    };
    await addDoc(collectionRef, payload);
    if (
      message.toLowerCase().indexOf("nhớ", 0) >= 0 ||
      message.toLowerCase().indexOf("miss you", 0) >= 0
    ) {
      console.log("true");
      setMessage("I miss you too");
    } else if (
      message.toLowerCase().indexOf("yêu", 0) >= 0 ||
      message.toLowerCase().indexOf("love you", 0) >= 0
    ) {
      console.log("true");
      setMessage("I love you too, you hold a special place in my heart ❤️");
    } else {
      console.log("false");
      clearInputs();
    }
  };

  useEffect(() => {
    clearInputs();
  }, [visible]);

  return (
    <Modal height={250} width={400} visible={visible} hide={hide}>
      <div className="modal">
        <div className="modal__header">
          <span>Send Message</span>
        </div>
        <div className="modal__body">
          <div className="modal__body__input">
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              type="text"
              placeholder="Message"
            />
          </div>
        </div>
        <div className="modal__footer">
          <div onClick={hide} className="modal__footer__btn">
            <button className="cancel">Cancel</button>
          </div>
          <div className="modal__footer__btn">
            <button onClick={() => handleSend()} className="save">
              Send
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SendMessage;
