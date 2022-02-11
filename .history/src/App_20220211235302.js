import ClickToEdit from './component/ClickToEdit';

import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import Toggle from './component/Toggle';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <ClickToEdit />
      <Modal />
      <Tab />
      <Tag />
      <Toggle />
    </>
  );
}

export default App;
