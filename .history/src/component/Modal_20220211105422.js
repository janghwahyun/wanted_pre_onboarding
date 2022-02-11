import React, { useState } from 'react';

function Modal() {
  let [modal, setModal] = useState(false);
  const ModalUI(){
return (
	<div className="modalUI">
		<h2>모달창 이어요</h2>
	</div>
	);

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




export default Modal;
