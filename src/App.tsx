import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { Features } from './components/Features';
import { Statistics } from './components/Statistics';
import { Testimonials } from './components/Testimonials';
import { Teachers } from './components/Teachers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Dashboard } from './components/dashboard/Dashboard';
import { Login } from './components/dashboard/Login';
import { Button } from './components/ui/button';
import { LayoutDashboard } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'website' | 'login' | 'dashboard'>('website');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView('website');
  };

  // Login page
  if (view === 'login') {
    return <Login onLoginSuccess={handleLoginSuccess} onBack={() => setView('website')} />;
  }

  // Dashboard page
  if (view === 'dashboard' && isAuthenticated) {
    return <Dashboard onBack={handleLogout} />;
  }

  // Website
  return (
    <div className="min-h-screen bg-white">
      {/* Dashboard Button */}
      <div className="fixed top-6 right-6 z-50">
        <Button 
          onClick={() => setView('login')}
          className="bg-gray-900 text-white hover:bg-gray-800 shadow-lg"
        >
          <LayoutDashboard className="w-4 h-4 mr-2" />
          Dashboard
        </Button>
      </div>

      <Hero />
      <About />
      <Courses />
      <Features />
      <Statistics />
      <Teachers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
