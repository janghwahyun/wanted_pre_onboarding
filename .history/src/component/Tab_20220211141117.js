import { useState, useRef } from 'react';
import styled from 'styled-components';

const Tab = () => {
  const menuArr = [
    { name: 'Tab1', value: 'Tab menu ONE' },
    { name: 'Tab2', value: 'Tab menu TWO' },
    { name: 'Tab3', value: 'Tab menu THREE' },
  ];
  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = idx => {
    setCurrentTab(idx);
  };

  return (
    <>
      <strong>Tab</strong>
      <div>
        <TabMenu>
          {menuArr.map((el, idx) => {
            return (
              <li key={idx} className={`${idx === currentTab ? 'submenu focused' : 'submenu'}`} onClick={() => selectMenuHandler(idx)}>
                {el.name}
              </li>
            );
          })}
        </TabMenu>
        <View>
          <p>{menuArr[currentTab].value}</p>
        </View>
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
  margin-bottom: 40px;
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

const View = styled.div`
  color: purple;
  text-align: center;
`;

export default Tab;
