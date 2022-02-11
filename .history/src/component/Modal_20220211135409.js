import { useState } from 'react';
import styled from 'styled-components';

const Modal = () => {
  const [isOn, setIsOn] = useState(false);
  const openModalHandler = event => {
    setIsOn(!isOn);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>{isOn ? 'Opened!' : 'Open Modal'}</ModalBtn>

        {isOn ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView
              onClick={event => {
                event.stopPropagation();
              }}
            >
              <div className="close-btn" onClick={openModalHandler}>
                &times;
              </div>
              <div>HELLO CODESTATES!</div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
const ModalContainer = styled.div`
  margin: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 200px;
  height: 100px;
  border-radius: 1rem;
  position: relative;
  font-weight: 100;
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
