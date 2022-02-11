import Main from './component/Main';
import './App.css';
import { BrowserRouter,Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={</Main>} />
</Routes>
<BrowserRouter/>
  );
}

export default App;
