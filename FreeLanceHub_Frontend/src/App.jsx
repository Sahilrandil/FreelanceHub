import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./styles.css";

import LandingPage from "./pages/LandingPage";
import FreelancerProfile from "./pages/FreelancerProfile";
import SearchDiscovery from "./pages/SearchDiscovery";

// Client
import JobManagementPage from "./pages/client/JobManagementPage";
import ClientInboxPage from "./pages/client/ClientInboxPage";

// Freelancer
import DiscoverPage from "./pages/freelancer/DiscoverPage";
import MyProposalsPage from "./pages/freelancer/MyProposalsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Client */}
      <Route path="/client/jobs" element={<JobManagementPage />} />
      <Route path="/client/inbox" element={<ClientInboxPage />} />

      {/* Freelancer */}
      <Route path="/discover" element={<DiscoverPage />} />
      <Route path="/freelancer/proposals" element={<MyProposalsPage />} />

      {/* Profile Page */}
      <Route path="/search" element={<SearchDiscovery />} />
      <Route path="/profile" element={<FreelancerProfile />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
 