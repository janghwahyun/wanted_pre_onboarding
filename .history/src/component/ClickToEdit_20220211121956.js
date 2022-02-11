import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const ClickToEdit = () => {
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('20');

  return (
    <>
      <div>ClickToEdit</div>
      <div>
        <input onChange={e => setName(e.target.value)}></input>
        <input onChange={e => setAge(e.target.value)}></input>

        <h2>
          이름 {name} 나이 {age}
        </h2>
      </div>
    </>
  );
};

export default ClickToEdit;
