import React, { useRef, useState } from 'react';

const ClickToEdit = () => {
  const [text, setText] = useState('');

  return (
    <form>
      <div>ClickToEdit</div>
      <input type="text" name="name" value={text}>
        이름
      </input>
    </form>
  );
};

export default ClickToEdit;
