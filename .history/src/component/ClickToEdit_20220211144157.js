import React, { useState } from 'react';
import styled from 'styled-components';

const ClickToEdit = () => {
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('20');

  return (
    <>
      <strong>ClickToEdit</strong>
      <Form>
        <div>
          이름 <Input onChange={e => setName(e.target.value)} />
        </div>
        <div>
          나이 <Input onChange={e => setAge(e.target.value)} />
        </div>
        <h2>
          이름 {name} 나이 {age}
        </h2>
      </Form>
    </>
  );
};
const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px;
  color: purple;
`;

const Input = styled.input`
  width: 200px;
  height: 50px;
  margin: 15px;
`;

export default ClickToEdit;
