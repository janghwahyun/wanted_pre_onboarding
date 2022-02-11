import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const ClickToEdit = () => {
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('20');

  return (
    <>
      <div>ClickToEdit</div>
      <Input>
        <input onChange={e => setName(e.target.value)}></input>
        <input onChange={e => setAge(e.target.value)}></input>

        <h2>
          이름 {name} 나이 {age}
        </h2>
      </Input>
    </>
  );
};

const Input = styled.div`
  flex-wrap: wrap;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ClickToEdit;
