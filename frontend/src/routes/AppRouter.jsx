import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../pages/HomePage'
import { DirectoryPage } from '../pages/DirectoryPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ContactPage } from '../pages/ContactPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { ControleConstructionPage } from '../pages/ControleConstructionPage'
import { PerformanceEnergetiquePage } from '../pages/PerformanceEnergetiquePage'
import { SecuriteSurChantierPage } from '../pages/SecuriteSurChantierPage'
import { VerificationsErpPage } from '../pages/VerificationsErpPage'
import { EnergieEnvironnementAcoustiquePage } from '../pages/EnergieEnvironnementAcoustiquePage'
import { VerificationsExploitationPage } from '../pages/VerificationsExploitationPage'
import { CoordinationSpsPage } from '../pages/CoordinationSpsPage'
import { EvenementielPage } from '../pages/EvenementielPage'
import { DiagnosticPemdPage } from '../pages/DiagnosticPemdPage'
import { MissionsPage } from '../pages/MissionsPage'
import { CompetencesPage } from '../pages/CompetencesPage'
import { AgencesPage } from '../pages/AgencesPage'
import { GroupePage } from '../pages/GroupePage'
import { HistoirePage } from '../pages/HistoirePage'
import { NormesDeConstructionPage } from '../pages/NormesDeConstructionPage'
import { SecuriteIncendiePage } from '../pages/SecuriteIncendiePage'
import { ImmeublesGrandeHauteurPage } from '../pages/ImmeublesGrandeHauteurPage'
import { ThermiquePage } from '../pages/ThermiquePage'
import { AcoustiquePage } from '../pages/AcoustiquePage'
import { ElectricitePage } from '../pages/ElectricitePage'
import { ParasismiquePage } from '../pages/ParasismiquePage'
import { GruesLevagePage } from '../pages/GruesLevagePage'
import { AscenseursPage } from '../pages/AscenseursPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/missions/controle-construction" element={<ControleConstructionPage />} />
          <Route path="/missions/verifications-erp" element={<VerificationsErpPage />} />
          <Route path="/missions/energie-environnement-acoustique" element={<EnergieEnvironnementAcoustiquePage />} />
          <Route path="/missions/verifications-exploitation" element={<VerificationsExploitationPage />} />
          <Route path="/missions/coordination-sps" element={<CoordinationSpsPage />} />
          <Route path="/missions/evenementiel" element={<EvenementielPage />} />
          <Route path="/missions/diagnostic-pemd" element={<DiagnosticPemdPage />} />
          <Route path="/missions/:slug" element={<DirectoryPage type="missions" eyebrow="Mission BBC" title="" description="" />} />
          <Route path="/competences" element={<CompetencesPage />} />
          <Route path="/competences/performance-energetique" element={<PerformanceEnergetiquePage />} />
          <Route path="/competences/securite-sur-chantier" element={<SecuriteSurChantierPage />} />
          <Route path="/competences/normes-de-construction" element={<NormesDeConstructionPage />} />
          <Route path="/competences/securite-incendie" element={<SecuriteIncendiePage />} />
          <Route path="/competences/immeubles-grande-hauteur" element={<ImmeublesGrandeHauteurPage />} />
          <Route path="/competences/thermique" element={<ThermiquePage />} />
          <Route path="/competences/acoustique" element={<AcoustiquePage />} />
          <Route path="/competences/electricite" element={<ElectricitePage />} />
          <Route path="/competences/parasismique" element={<ParasismiquePage />} />
          <Route path="/competences/grues-levage" element={<GruesLevagePage />} />
          <Route path="/competences/ascenseurs" element={<AscenseursPage />} />
          <Route path="/competences/:slug" element={<DirectoryPage type="competences" eyebrow="Compétence BBC" title="" description="" />} />
          <Route path="/agences" element={<AgencesPage />} />
          <Route path="/agences/:slug" element={<DirectoryPage type="agences" eyebrow="Agence BBC" title="" description="" />} />
          <Route path="/groupe" element={<GroupePage />} />
          <Route path="/groupe/histoire" element={<HistoirePage />} />
          <Route path="/groupe/:slug" element={<DirectoryPage type="groupe" eyebrow="Groupe BBC" title="" description="" />} />
          <Route path="/realisations" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
