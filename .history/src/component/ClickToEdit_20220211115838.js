import React, { useRef, useState } from 'react';
import { UNSAFE_RouteContext } from 'react-router-dom';

const ClickToEdit = () => {
  const [text, setText] = useState('');
  console.log(setText);
  return (
    <>
      <div>ClickToEdit</div>
      <input  name="name" value={text} onChange={(e)=>setText{e.target.value})}></input>
    </>
  );
};

export default ClickToEdit;
