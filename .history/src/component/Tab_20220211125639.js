import React from 'react';
import styled from 'styled-components';

const Tab = () => {
  const arr = ['First', 'Second', 'Third'];

  {
    arr.map((str, idx) => {
      return (
        <li key={str} onClick={() => this.clickHandler(idx)}>
          {str}
        </li>
      );
    });
  }
};

const Button = styled.button``;

export default Tab;
