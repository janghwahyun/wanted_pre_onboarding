import { useState } from 'react';
import styled from 'styled-components';

const Modal = props => {
  const { _onClick, width, height } = props;

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
            <ModalView onClick={_onClick}>
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
`;

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  z-index: 1;
  background-color: grey;
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
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    cursor: pointer;
  }
`;

Modal.defaultProps = {
  with: '100%',
  hegith: '100%',
  _onClick: e => {
    e.stopPropagation();
  },
};
export default Modal;
