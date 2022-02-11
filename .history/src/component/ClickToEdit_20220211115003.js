import React, { useRef, useState } from 'react';

const ClickToEdit = () => {
  const [text, setText] = useState('');

  return (
    <>
      <div>ClickToEdit</div>
      <input type="text" name="name" value={text}></input>
    </form>
	<div>
		
	</div>
	</>
  );
};

export default ClickToEdit;
