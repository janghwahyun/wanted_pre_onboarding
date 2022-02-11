import React, { useRef, useState } from 'react';
import { UNSAFE_RouteContext } from 'react-router-dom';

const ClickToEdit = () => {
  const [text, setText] = useState('');

  return (
    <>
      <div>ClickToEdit</div>
      <input onChange={e => setText(e.target.value)}></input>
      <h2>{text}</h2>
    </>
  );
};

export default ClickToEdit;
