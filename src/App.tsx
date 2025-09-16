import { useState } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { QuoteOfTheDay } from "./components/QuoteOfTheDay";
import { ChatbotPopup } from "./components/ChatbotPopup";
import { HomePage } from "./components/HomePage";
import { AIChatPage } from "./components/AIChatPage";
import { CommunityPage } from "./components/CommunityPage";
import { ResourcesPage } from "./components/ResourcesPage";
import { RelaxationSection } from "./components/RelaxationSection";

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isChatbotPopupOpen, setIsChatbotPopupOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'ai-chat':
        return <AIChatPage />;
      case 'community':
        return <CommunityPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'relaxation':
        return <RelaxationSection />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      <Navigation 
        onQuoteClick={() => setIsQuoteModalOpen(true)} 
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
      <main className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 max-w-7xl">
        {renderCurrentPage()}
      </main>
      
      <QuoteOfTheDay 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      
      <ChatbotPopup
        isOpen={isChatbotPopupOpen}
        onClose={() => setIsChatbotPopupOpen(false)}
      />
    </div>
  );
}