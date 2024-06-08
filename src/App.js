import logo from './logo.svg';
import './App.css';
import SelectPhoto from './components/SelectPhoto';
import SearchPhoto from './components/SearchPhoto';
import DeletePhoto from './components/DeletePhoto';
import ViewPhoto from './components/ViewPhoto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route>
        <Route path='/'element={<SelectPhoto/>}/>
        <Route path='/search'element={<SearchPhoto/>}/>
        <Route path='/delete'element={<DeletePhoto/>}/>
        <Route path='/viewphoto'element={<ViewPhoto/>}/>
          </Route>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
