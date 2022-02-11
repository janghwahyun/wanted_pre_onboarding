import React, { useRef, useState } from 'react';
import { UNSAFE_RouteContext } from 'react-router-dom';

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

const Input = styled.input``;

export default ClickToEdit;
