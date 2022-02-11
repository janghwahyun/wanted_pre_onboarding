import { useState, useRef } from 'react';
import styled from 'styled-components';

const Tab = () => {
  const menuArr = [
    { name: 'Tab1', value: 'Tab menu ONE' },
    { name: 'Tab2', value: 'Tab menu TWO' },
    { name: 'Tab3', value: 'Tab menu THREE' },
  ];
  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = index => {
    console.log(index);
    setCurrentTab(index);
  };

  return (
    <>
      <strong>Tab</strong>
      <div>
        <TabMenu>
          {menuArr.map((el, index) => {
            return (
              <li key={index} className={`${index === currentTab ? 'submenu focused' : 'submenu'}`} onClick={() => selectMenuHandler(index)}>
                {el.name}
              </li>
            );
          })}
        </TabMenu>
        <Desc>
          <p>{menuArr[currentTab].value}</p>
        </Desc>
      </div>
    </>
  );
};

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 30px;
  height: 40px;

  .submenu {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    cursor: pointer;
  }

  .focused {
    background-color: blue;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    transition: 1s;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export default Tab;
