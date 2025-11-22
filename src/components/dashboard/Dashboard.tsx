import { useState } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardOverview } from './DashboardOverview';
import { CoursesSection } from './CoursesSection';
import { TeachersSection } from './TeachersSection';
import { TestimonialsSection } from './TestimonialsSection';
import { SettingsSection } from './SettingsSection';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';

interface DashboardProps {
  onBack: () => void;
}

export function Dashboard({ onBack }: DashboardProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <DashboardOverview />;
      case 'courses':
        return <CoursesSection />;
      case 'teachers':
        return <TeachersSection />;
      case 'testimonials':
        return <TestimonialsSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <DashboardSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onBack={onBack}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl text-gray-900">
                {activeSection === 'overview' && 'Sayt boshqaruvi'}
                {activeSection === 'courses' && 'Kurslar'}
                {activeSection === 'teachers' && 'O\'qituvchilar'}
                {activeSection === 'testimonials' && 'Sharhlar'}
                {activeSection === 'settings' && 'Sozlamalar'}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Admin</p>
                <p className="text-xs text-gray-500">Nodirschool</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}
