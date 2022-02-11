import ClickToEdit from './component/ClickToEdit';

import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import Toggle from './component/Toggle';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<*/>} />
        <Route path="/ClickToEdit" element={<ClickToEdit />} />
        <Route path="/Modal" element={<Modal />} />
        <Route path="/Tab" element={<Tab />} />
        <Route path="/Tag" element={<Tag />} />
        <Route path="/Toggle" element={<Toggle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
