import { useState } from 'react';
import styled from 'styled-components';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false); //isOpen 상태를 만들어준다.
  const openModalHandler = event => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        {/* 모달창이 열렸을 때 버튼은'Opened!' 닫혔을 때 'Open Modal' */}
        <ModalBtn onClick={openModalHandler}>{isOpen ? 'Opened!' : 'Open Modal'}</ModalBtn>
        //isOpen이 true이면 모달창을 열고, false이면 null값을 준다.
        {isOpen ? (
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  role: 'dialog',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 200px;
  height: 100px;
  border-radius: 1rem;
  position: relative;
  > .close-btn {
    position: absolute;
    top: 2px;
    right: 7px;
    cursor: pointer;
  }
`;

export default Modal;
