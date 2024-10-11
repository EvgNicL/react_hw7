import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserOwnPage } from './components/UserOwnPage';
import { UsersAllPage } from './components/UsersAllPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<UsersAllPage />}></Route>
              <Route path='/user' element={<UserOwnPage />}></Route>
            </Routes>
          </BrowserRouter>


      </header>
    </div>
  );
}

export default App;
