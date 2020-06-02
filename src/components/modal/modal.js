import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
const AntdModal = ({ centered }) => {
  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function handleOk(e) {
    setVisible(false);
  }

  function handleCancel(e) {
    setVisible(false);
  }

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={centered}
      >
        <p>אלירן יא הומו</p>
      </Modal>
    </div>
  );
};

export default AntdModal;
