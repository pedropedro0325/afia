import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Patient from './pages/Patient/Patient';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='/patient' element={<Patient />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
