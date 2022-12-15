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
import AjouterEvent from './pages/Events/AjouterEvent/AjouterEvent';
import AjouterPatient from './pages/Patients/AjouterPatient/AjouterPatient';
import Specialites from './pages/Specialities/ListeSpecialities/Specialites';
import AjouterSpeciality from './pages/Specialities/AjouterSpeciality/AjouterSpeciality';
import ListeChambres from './pages/Chambres/ListeChambres/ListeChambres';
import ListeFacturations from './pages/Facturations/ListeFacturations/ListeFacturations';
import Medicaments from './pages/Pharmacie/Medicaments/Medicaments';
import Departements from './pages/Departements/ListeDepartements/Departements';
import Types from './pages/Types/ListeTypes/Postes';
import AjouterType from './pages/Types/AjouterType/AjouterType';
import Actes from './pages/Actes/ListeActes/Actes';
import Salles from './pages/TypeSalles/SalleTypes/Salles'
import Status from './pages/Status/ManyStatus/Status';
import AjouterSalle from './pages/Chambres/NouvelChambre/AjouterSalle';
import AjouterTypeSalle from './pages/TypeSalles/AjouterTypes/AjouterTypeSalle';
import AjouterActe from './pages/Actes/AjouterActe/AjouterActe';
import AjouterStatus from './pages/Status/AjouterStatus/AjouterStatus';
import ErrorPage from './pages/Error/ErrorPage';

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
          <Route path='/personnel/detail/:partakerId' element={<DetailMedecin />} />
          <Route path='/ajouter-un-personnel' element={<AjouterPersonnel />} />
          <Route path='/evenements' element={<Events />} />
          <Route path='/ajouter-un-evenement' element={<AjouterEvent />} />
          <Route path='/specialites' element={<Specialites />} />
          <Route path='/postes' element={<Types />} />
          <Route path='/ajouter/specialite' element={<AjouterSpeciality />} />
          <Route path='/ajouter/type' element={<AjouterType />} />
          <Route path='/salles' element={<ListeChambres />} />
          <Route path='/facturation' element={<ListeFacturations />} />
          <Route path='/medicament' element={<Medicaments />} />
          <Route path='/departement' element={<Departements />} />
          <Route path='/actes' element={<Actes />} />
          <Route path='/salle/types' element={<Salles />} />
          <Route path='/status' element={<Status />} />
          <Route path='/ajouter/salle' element={<AjouterSalle />} />
          <Route path='/ajouter/type/salle' element={<AjouterTypeSalle />} />
          <Route path='/ajouter/acte' element={<AjouterActe />} />
          <Route path='/ajouter/status' element={<AjouterStatus />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
