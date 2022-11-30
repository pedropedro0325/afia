import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Agenda from './pages/Agenda/Agenda';
import AjouterMedecin from './pages/Docteurs/AjouterDocteur/AjouterMedecin';
import AjouterPatient from './pages/Patients/AjouterPatient/AjouterPatient';
import DetailPatient from './pages/Patients/DetailsPatient/DetailPatient';
import DetailMedecin from './pages/Docteurs/DetailsDocteur/DetailMedecin';
import Home from './pages/Home/Home';
import Medecin from './pages/Docteurs/ListeDocteurs/Medecin';
import Patient from './pages/Patients/ListePatients/Patient';
import ListePersonnel from './pages/Personnels/ListePersonnels/ListePersonnel';
import AjouterPersonnel from './pages/Personnels/AjouterPersonnel/AjouterPersonnel';
import Events from './pages/Events/ListeEvents/Events';
import DetailsPersonnel from './pages/Personnels/DetailsPersonnel/DetailsPersonnel';
import AjouterEvent from './pages/Events/AjouterEvent/AjouterEvent';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route path='' element={<Home />} />
          <Route index element={<Home />} />
          <Route path='/patient' element={<Patient />} />
          <Route path='/medecin' element={<Medecin />} />
          <Route path='/personnels' element={<ListePersonnel />} />
          <Route path='/agenda' element={<Agenda />} />
          <Route path='/detail-patient/:patientId' element={<DetailPatient />} />
          <Route path='/ajouter-un-patient' element={<AjouterPatient />} />
          <Route path='/detail-medecin/:id' element={<DetailMedecin />} />
          <Route path='/ajouter-un-medecin' element={<AjouterMedecin />} />
          <Route path='/ajouter-un-personnel' element={<AjouterPersonnel />} />
          <Route path='/detail-personnel/:id' element={<DetailsPersonnel />} />
          <Route path='/evenements' element={<Events />} />
          <Route path='/ajouter-un-evenement' element={<AjouterEvent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
