// react-libraries
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

// styles
import "./AppModal.scss";

const AppModal = ({ history, children, maxWidth = 400, trigger }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [autoTrigger, setAutoTrigger] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
    autoTrigger && history.push("/");
  };

  useEffect(() => {
    const autoTriggerPaths = [
      "/signup",
      "/login",
      "/reset-password",
      "/forgot-password"
    ].includes(history.location.pathname);

    if (autoTriggerPaths) {
      setModalVisible(true);
      setAutoTrigger(true);
      document.body.style.overflow = "hidden";
      document.querySelector("#root").style.filter = "blur(5px)";
    }

    return () => {
      document.body.style.overflow = "initial";
      document.querySelector("#root").style.filter = "initial";
    };
  }, [history]);

  const openModal = () => {
    setModalVisible(true);
  };

  const style = {
    overlay: {
      background: "rgba(0, 0, 0, .3)"
    },
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      maxWidth,
      width: "100%",
      padding: "0",
      borderRadius: "4px",
      boxShadow: "0 0 20px rgba(0, 0, 0, .05)",
      border: "0"
    }
  };

  return (
    <div className="modal">
      {trigger && <div onClick={openModal}>{trigger}</div>}
      <Modal
        isOpen={modalVisible}
        onRequestClose={closeModal}
        style={style}
        ariaHideApp={false}
      >
        <div className="modal__close" onClick={closeModal}>
          <FaTimes />
        </div>
        <div className="modal__content">{children}</div>
      </Modal>
    </div>
  );
};

AppModal.propType = {
  maxWidth: PropTypes.number,
  afterOpenModal: PropTypes.func
};

export default withRouter(AppModal);
