import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  GraduationCap,
  Settings,
  ArrowLeft,
  X
} from 'lucide-react';
import logo from 'figma:asset/fa2cc7d7ed69c7eea426f4471d5309d3f85c7211.png';
import { Button } from '../ui/button';

interface DashboardSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onBack: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function DashboardSidebar({ 
  activeSection, 
  setActiveSection, 
  onBack,
  isOpen,
  setIsOpen 
}: DashboardSidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Asosiy', icon: LayoutDashboard },
    { id: 'courses', label: 'Kurslar', icon: BookOpen },
    { id: 'teachers', label: 'O\'qituvchilar', icon: GraduationCap },
    { id: 'testimonials', label: 'Sharhlar', icon: Users },
    { id: 'settings', label: 'Sozlamalar', icon: Settings },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -256 }}
        className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white z-50 flex flex-col shadow-xl"
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <img src={logo} alt="Nodirschool" className="w-40 h-auto brightness-0 invert" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-white hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>
        </nav>

        {/* Back Button */}
        <div className="p-4 border-t border-gray-800">
          <Button
            onClick={onBack}
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <ArrowLeft className="w-5 h-5 mr-3" />
            Chiqish
          </Button>
        </div>
      </motion.aside>
    </>
  );
}
