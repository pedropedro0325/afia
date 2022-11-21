import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Agenda from './pages/Agenda/Agenda';
import DetailPatient from './pages/DetailsPatients/DetailPatient';
import Home from './pages/Home/Home';
import Medecin from './pages/Medecins/Medecin';
import Patient from './pages/Patient/Patient';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='/patient' element={<Patient />} />
          <Route path='/medecin' element={<Medecin />} />
          <Route path='/agenda' element={<Agenda />} />
          <Route path='/detail-patient/:id' element={<DetailPatient />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
