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
          <Route path="/competences" element={<DirectoryPage type="competences" eyebrow="Compétences" title="Nos domaines d’expertise" description="Les compétences techniques seront structurées ici afin de permettre une navigation simple par domaine." />} />
          <Route path="/competences/performance-energetique" element={<PerformanceEnergetiquePage />} />
          <Route path="/competences/securite-sur-chantier" element={<SecuriteSurChantierPage />} />
          <Route path="/competences/:slug" element={<DirectoryPage type="competences" eyebrow="Compétence BBC" title="" description="" />} />
          <Route path="/agences" element={<DirectoryPage type="agences" eyebrow="Un réseau de proximité" title="Nos agences" description="Le réseau territorial BBC sera présenté avec les informations officielles de chaque implantation." />} />
          <Route path="/agences/:slug" element={<DirectoryPage type="agences" eyebrow="Agence BBC" title="" description="" />} />
          <Route path="/groupe" element={<DirectoryPage type="groupe" eyebrow="Le groupe" title="BBC, une équipe et une histoire" description="Une section dédiée à l’histoire, aux équipes, aux agréments, au recrutement et aux actualités du groupe." />} />
          <Route path="/groupe/:slug" element={<DirectoryPage type="groupe" eyebrow="Groupe BBC" title="" description="" />} />
          <Route path="/realisations" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
