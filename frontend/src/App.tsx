// node module imports
import MyComponent from './components/MyComponent';
import { FC } from "react";
import { Routes, Route } from 'react-router-dom';

// custom imports
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App: FC = () => {
  return (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/signup' element={<SignupPage />} />
    <Route path='/test' element={<MyComponent />} />
  </Routes>   
  );
}

export default App;