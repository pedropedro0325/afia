import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Agenda from './pages/Agenda/Agenda';
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
import AjouterPatient from './pages/Patients/AjouterPatient/AjouterPatient';
import Specialites from './pages/Specialities/ListeSpecialities/Specialites';
import AjouterSpeciality from './pages/Specialities/AjouterSpeciality/AjouterSpeciality';
import ListeChambres from './pages/Chambres/ListeChambres/ListeChambres';
import ListeFacturations from './pages/Facturations/ListeFacturations/ListeFacturations';
import Medicaments from './pages/Pharmacie/Medicaments/Medicaments';
import Departements from './pages/Departements/ListeDepartements/Departements';

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
          <Route path='/patient/detail/:patientId' element={<DetailPatient />} />
          <Route path='/ajouter-un-patient' element={<AjouterPatient />} />
          <Route path='/detail-medecin/:id' element={<DetailMedecin />} />
          <Route path='/ajouter-un-personnel' element={<AjouterPersonnel />} />
          <Route path='/detail-personnel/:id' element={<DetailsPersonnel />} />
          <Route path='/evenements' element={<Events />} />
          <Route path='/ajouter-un-evenement' element={<AjouterEvent />} />
          <Route path='/specialites' element={<Specialites />} />
          <Route path='/ajouter/specialite' element={<AjouterSpeciality />} />
          <Route path='/chambre' element={<ListeChambres />} />
          <Route path='/facturation' element={<ListeFacturations />} />
          <Route path='/medicament' element={<Medicaments />} />
          <Route path='/departement' element={<Departements />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
