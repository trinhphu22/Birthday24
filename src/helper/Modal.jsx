import React from "react";
import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";

const Modal = ({ height, width, visible, hide, children }) => {
  return (
    <Rodal
      visible={visible}
      height={height}
      width={width}
      onClose={hide}
      animation="door"
      customStyles={{ borderRadius: "10px", padding: "0" }}
      customMaskStyles={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      {children}
    </Rodal>
  );
};

export default Modal;
