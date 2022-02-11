import React, { useState } from 'react';
import styled from 'styled-components';
function Modal() {
  let [modal, setModal] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setModal(true);
          }}
        >
          Open Modal
        </button>

        {modal === true ? <ModalUI /> : null}
      </div>
    </>
  );
}
const ModalUI = () => {
  return (
    <div className="modalUI">
      <h2>모달창 이어요</h2>
    </div>
  );
};

export default Modal;
