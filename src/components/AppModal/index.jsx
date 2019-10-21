// react-libraries
import Modal from "react-modal";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// styles
import "./AppModal.scss";

class AppModal extends Component {
  state = {
    modalIsOpen: true
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    this.props.history.push("/");
  };

  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "0"
      }
    };

    return (
      <div className="modal">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <div className="modal__close" onClick={this.closeModal}>
            <img
              src="https://res.cloudinary.com/store-manager/image/upload/v1571289362/barefoot-nomad/multiply.svg"
              alt="close"
            />
          </div>
          <div className="modal__content">
            {
              this.props.children
            }
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(AppModal);
