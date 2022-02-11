import React, { useRef, useState } from 'react';
import { UNSAFE_RouteContext } from 'react-router-dom';

const ClickToEdit = () => {
  const [text, setText] = useState('');
  const [isEdit, setIsEdit] = useState(false);

 const onChange = event => {
    if (event.currentTarget === null) {
      return;
    }

  return (
    <>
      <div>ClickToEdit</div>
      <input type="text" name="name" value={text} onChange={onChange}></input>
    </>
  );
};

export default ClickToEdit;
