import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
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
    };
    await addDoc(collectionRef, payload);
    clearInputs();
  };

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
