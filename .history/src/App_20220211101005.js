
import Main from './component/Main ';
import ClickToEdit from './component/ClickToEdit';
import AutoComplete from './component/AutoComplete';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Toggle from './component/Toggle';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ClickToEdit" element={<ClickToEdit />} />
        <Route path="/AutoComplete" element={<AutoComplete />} />
        <Route path="/Modal" element={<Modal />} />
        <Route path="/Tab" element={<Tab />} />
        <Route path="/Toggle" element={<Toggle />} />
        <Main
      </Routes>
    </BrowserRouter>
  );
}

export default App;
