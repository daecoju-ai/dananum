
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SurveyPage from './pages/SurveyPage';
import ResultsPage from './pages/ResultsPage';
import BenefitsPage from './pages/BenefitsPage';
import PrivacyPage from './pages/PrivacyPage';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
