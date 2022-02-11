import React, { useRef, useState } from 'react';
import { UNSAFE_RouteContext } from 'react-router-dom';

const ClickToEdit = () => {
  const [text, setText] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <>
      <div>ClickToEdit</div>
      <input type="text" name="name" value={text} onChange={(e)=>setText{e.target.value})}></input>
    </>
  );
};

export default ClickToEdit;
