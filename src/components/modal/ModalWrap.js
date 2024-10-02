import { useState } from "react";
import Modal from "./Modal";
import { Button, Container } from "react-bootstrap";

const ModalWrap = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div className="wrapper">
      <Container className="text-center">
        <Button onClick={handleToggleModalPopup}>Open Modal Popup</Button>
        {showModalPopup && (
          <Modal
            onClose={onClose}
            header={<h3>This is header</h3>}
            footer={<h3>This is footer</h3>}
            body={<div>Customized Body</div>}
          />
        )}
      </Container>
    </div>
  );
};

export default ModalWrap;
