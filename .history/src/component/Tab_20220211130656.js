import { useState, useRef } from 'react';
import styled from 'styled-components';

const Tab = () => {
  const menuArr = [
    { name: 'Tab1', content: 'Tab menu ONE' },
    { name: 'Tab2', content: 'Tab menu TWO' },
    { name: 'Tab3', content: 'Tab menu THREE' },
  ];
  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = index => {
    console.log(index);
    setCurrentTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {/*TIP: li 엘리먼트의 class명의 경우 선택된 tab 은 'submenu focused' 가 되며, 
                  나머지 2개의 tab은 'submenu' 가 된다.*/}
          {menuArr.map((el, index) => {
            return (
              <li key={index} className={`${index === currentTab ? 'submenu focused' : 'submenu'}`} onClick={() => selectMenuHandler(index)}>
                {el.name}
              </li>
            );
          })}
        </TabMenu>
        <Desc>
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
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
