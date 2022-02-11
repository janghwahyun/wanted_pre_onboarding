import React, { useRef, useState } from 'react';
import { UNSAFE_RouteContext } from 'react-router-dom';

const ClickToEdit = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <>
      <div>ClickToEdit</div>
      <form>
        <input onChange={e => setName(e.target.value)}></input>
        <input onChange={e => setAge(e.target.value)}></input>
      </form>
      <h2>
        이름 {name} 나이 {age}
      </h2>
    </>
  );
};

export default ClickToEdit;
