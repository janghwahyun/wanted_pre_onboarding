import React, { useRef, useState } from 'react';

const ClickToEdit = () => {
  const [text, setText] = useState('');

  return (
    <form>
      <div>ClickToEdit</div>
      <input type="text" name="name" value={text}></input>
    </form>
	<div>
		
	</div>
	<form/>
  );
};

export default ClickToEdit;
