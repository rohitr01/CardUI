import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EligibilityPage from "./pages/EligibilityPage";
import ResultsPage from "./pages/ResultsPage";
import CardDetailPage from "./pages/CardDetailPage";
import RewardsCalculatorPage from "./pages/RewardsCalculatorPage";
import ComparisonPage from "./pages/ComparisonPage";
import CardRoastPage from "./pages/CardRoastPage";
import TravelCardsPage from "./pages/TravelCardsPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ContactPage from "./pages/ContactPage";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/eligibility" element={<Layout><EligibilityPage /></Layout>} />
        <Route path="/results" element={<Layout><ResultsPage /></Layout>} />
        <Route path="/cards/:id" element={<Layout><CardDetailPage /></Layout>} />
        <Route path="/cards/swiggy-hdfc" element={<Layout><CardDetailPage /></Layout>} />
        <Route path="/rewards-calculator" element={<Layout><RewardsCalculatorPage /></Layout>} />
        <Route path="/comparison" element={<Layout><ComparisonPage /></Layout>} />
        <Route path="/card-roast" element={<Layout><CardRoastPage /></Layout>} />
        <Route path="/travel-cards" element={<Layout><TravelCardsPage /></Layout>} />
        <Route path="/credit-cards" element={<Layout><ResultsPage /></Layout>} />
        <Route path="/banks" element={<Layout><ResultsPage /></Layout>} />
        <Route path="/guides" element={<Layout><HomePage /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
        <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="*" element={<Layout><HomePage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
