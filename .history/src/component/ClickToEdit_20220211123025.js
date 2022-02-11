import React, { useState } from 'react';
import styled from 'styled-components';

const ClickToEdit = () => {
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('20');

  return (
    <>
      <div>ClickToEdit</div>
      <Form>
        <Input onChange={e => setName(e.target.value)}></Input>
        <Input onChange={e => setAge(e.target.value)}></Input>

        <h2>
          이름 {name} 나이 {age}
        </h2>
      </Form>
    </>
  );
};
const Form = styled.div`
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 30%;
  height: 40px;
  display: flex;
  margin: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ClickToEdit;
