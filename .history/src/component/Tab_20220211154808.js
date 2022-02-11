import { useState } from 'react';
import styled from 'styled-components';

const Tab = () => {
  const tapArr = [
    { name: 'Tab1', value: 'Tab menu ONE' },
    { name: 'Tab2', value: 'Tab menu TWO' },
    { name: 'Tab3', value: 'Tab menu THREE' },
  ];
  const [isTab, setIsTab] = useState(0);

  const selectMenuHandler = idx => {
    setIsTab(idx);
  };

  return (
    <>
      <strong>Tab</strong>
      <TabMenu>
        {tapArr.map((data, idx) => {
          return (
            <div key={idx} className={`${idx === isTab ? 'isMenu' : 'stanbyMenu'}`} onClick={() => selectMenuHandler(idx)}>
              {data.name}
            </div>
          );
        })}
      </TabMenu>
      <ValueView>
        <p>{tapArr[isTab].value}</p>
      </ValueView>
    </>
  );
};

const TabMenu = styled.li`
  background-color: grey;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  margin: 4em;
  height: 40px;

  > .isMenu {
    display: flex;
    background-color: purple;
    color: white;
    height: 100%;
    align-items: center;
    justify-content: center;
    transition: 1s;
    flex-grow: 1;
  }

  > .stanbyMenu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    cursor: pointer;
  }
`;

const ValueView = styled.div`
  color: purple;
  font-weight: bold;
  text-align: center;
`;

export default Tab;
