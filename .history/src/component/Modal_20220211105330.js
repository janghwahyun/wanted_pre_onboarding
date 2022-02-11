import React, { useState } from 'react';

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

        {madal === true ? <ModalUI /> : null}
      </div>
    </>
  );
}

// function ModalUI(){
// return (
// 	<div className="modalUI">
// 		<h2>모달창 이어요</h2>
// 	</div>
// 	);

export default Modal;
