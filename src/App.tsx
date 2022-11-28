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
import RendezVous from './pages/RendezVous/ListeRendez-vous/RendezVous';
import PrendreRendezVous from './pages/RendezVous/PrendreRendezVous/PrendreRendezVous';
import ListePersonnel from './pages/Personnels/ListePersonnels/ListePersonnel';
import AjouterPersonnel from './pages/Personnels/AjouterPersonnel/AjouterPersonnel';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='/rendez-vous' element={<RendezVous />} />
          <Route path='/patient' element={<Patient />} />
          <Route path='/medecin' element={<Medecin />} />
          <Route path='/personnels' element={<ListePersonnel />} />
          <Route path='/agenda' element={<Agenda />} />
          <Route path='/detail-patient/:id' element={<DetailPatient />} />
          <Route path='/ajouter-un-patient' element={<AjouterPatient />} />
          <Route path='/detail-medecin/:id' element={<DetailMedecin />} />
          <Route path='/ajouter-un-medecin' element={<AjouterMedecin />} />
          <Route path='/creer-un-rendez-vous' element={<PrendreRendezVous />} />
          <Route path='/ajouter-un-personnel' element={<AjouterPersonnel />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
