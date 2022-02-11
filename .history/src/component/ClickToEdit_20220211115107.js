import React, { useRef, useState } from 'react';
import { UNSAFE_RouteContext } from 'react-router-dom';

const ClickToEdit = () => {
  const [text, setText] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div>ClickToEdit</div>
      <input type="text" name="name" value={text}></input>
    </>
  );
};

export default ClickToEdit;
