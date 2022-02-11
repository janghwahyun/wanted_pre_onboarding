import React, { useRef } from 'react';

const ClickToEdit = () => {
  const onChange = event => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    updatedCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const onSubmit = () => {};

  return (
    <form>
      <div>ClickToEdit</div>
      <input type="text" name="name" value={text} onChange={onChange}></input>
    </form>
  );
};

export default ClickToEdit;
