import { useState } from 'react';
import styled from 'styled-components';

const Toggle = () => {
  const [Work, setWork] = useState(false);

  const toggleHandler = () => {
    setWork(!Work);
  };

  return (
    <>
      <strong>Toggle</strong>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${Work ? 'toggle--checked' : ''}`} />
        <div className={`toggle-circle ${Work ? 'toggle--checked' : ''}`} />
      </ToggleContainer>
      <StateShow>
        <div>{Work ? 'Toggle Switch ON' : 'Toggle Switch OFF'}</div>
      </StateShow>
    </>
  );
};

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;

    background-position: right;
    background: linear-gradient(to left, grey 50%, purple 50%) right;
    background-size: 200%;
    /* transition: 1s; */
    &.toggle--checked {
      background-position: left;
      background: linear-gradient(to right, purple 50%, grey 50%) left;
      background-size: 200%;
      /* transition: 1s; */
    }
  }

  .toggle-circle {
    position: absolute;
    top: 1px;
    left: 0px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: white;
    transition: 1s;
    &.toggle--checked {
      left: 27px;
      transition: 1s;
    }
  }
`;

const StateShow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

export default Toggle;
