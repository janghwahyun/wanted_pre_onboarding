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
          이름 <Input onChange={e => setName(e.target.value)}></Input>
        </div>
        <div>
          나이 <Input onChange={e => setAge(e.target.value)}></Input>
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
  https: ; //velog.io/@eunjeong/CSS-Flex-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%95%8C%EA%B8%B0
`;

export default ClickToEdit;
