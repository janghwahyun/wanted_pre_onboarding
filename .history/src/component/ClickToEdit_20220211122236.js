import React, { useState } from 'react';
import styled from 'styled-components';

const ClickToEdit = () => {
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('20');

  return (
    <>
      <div>ClickToEdit</div>
      <div>
        <Input>
          <input onChange={e => setName(e.target.value)}></input>
          <input onChange={e => setAge(e.target.value)}></input>
        </Input>
        <h2>
          이름 {name} 나이 {age}
        </h2>
      </div>
    </>
  );
};

const Input = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
`;

export default ClickToEdit;
