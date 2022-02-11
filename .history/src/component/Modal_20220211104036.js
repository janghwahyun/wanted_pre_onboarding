import React, { useState } from 'react';

function Modal = () => {

	let [modal, setmodal] = useState(false);  
  return <div> 
	  <button onClick={()=>{setmodal(!modal)}}>Open Modal</button>
  
  </div>;
};

function ModalUI(){
return (
	<div className="modalUI">
		<h2>모달창 이어요</h2>
	</div>
	)

export default Modal;
