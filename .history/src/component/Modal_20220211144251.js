import { useState } from 'react';
import styled from 'styled-components';

const Modal = () => {
  const [isOn, setIsOn] = useState(false);
  const openModalHandler = e => {
    setIsOn(!isOn);
  };

  return (
    <>
      <strong>Modal</strong>
      <ModalBox>
        <ModalBtn onClick={openModalHandler}>Open Modal</ModalBtn>

        {isOn ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <div className="close-btn" onClick={openModalHandler}>
                &times;
              </div>
              <div>HELLO CODESTATES!</div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalBox>
    </>
  );
};
const ModalBox = styled.div`
  margin: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 2s;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: grey;
  z-index: 2;
`;

const ModalBtn = styled.button`
  background-color: purple;
  font-weight: bold;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 20%;
  height: 10%;
  border-radius: 1rem;
  position: relative;
  font-weight: bold;
  color: purple;

  > .close-btn {
    position: absolute;
    top: 2px;
    right: 7px;
    padding: 3px;
    cursor: pointer;
  }
`;

export default Modal;
