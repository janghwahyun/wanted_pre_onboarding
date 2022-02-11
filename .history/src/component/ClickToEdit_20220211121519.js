import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const ClickToEdit = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <>
      <div>ClickToEdit</div>
      <Input>
        <input onChange={e => setName(e.target.value)}></input>
        <input onChange={e => setAge(e.target.value)}></input>
      </Input>
      <h2>
        이름 {name} 나이 {age}
      </h2>
    </>
  );
};

const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ClickToEdit;
