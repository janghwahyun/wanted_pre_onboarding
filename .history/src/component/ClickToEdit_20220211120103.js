import React, { useRef, useState } from 'react';
import { UNSAFE_RouteContext } from 'react-router-dom';

const ClickToEdit = () => {
  const [text, setText] = useState('');

  console.log(e.target.value);

  return (
    <>
      <div>ClickToEdit</div>
      <input onChange={e => setText(e.target.value)}></input>
    </>
  );
};

export default ClickToEdit;
