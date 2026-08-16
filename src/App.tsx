import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PageMeta from './components/PageMeta';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import OffersPage from './pages/OffersPage';
import ProgramPage from './pages/ProgramPage';
// import SimulationPage from './pages/SimulationPage';

/**
 * Point d'entrée du routage multipage.
 * ScrollToTop remet la page en haut à chaque changement de route.
 */
function App() {
  return (
    <BrowserRouter>
      <PageMeta />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/le-programme" element={<ProgramPage />} />
          <Route path="/offres" element={<OffersPage />} />
          {/* <Route path="/simulation" element={<SimulationPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
