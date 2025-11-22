import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { BookOpen, GraduationCap, Users, MessageSquare, Eye } from 'lucide-react';

export function DashboardOverview() {
  const stats = [
    {
      title: 'Jami kurslar',
      value: '6',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      link: 'courses'
    },
    {
      title: 'O\'qituvchilar',
      value: '6',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
      link: 'teachers'
    },
    {
      title: 'Sharhlar',
      value: '4',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      link: 'testimonials'
    },
    {
      title: 'Sayt ko\'rinishlari',
      value: '1,234',
      icon: Eye,
      color: 'from-orange-500 to-red-500',
      link: ''
    }
  ];

  const quickActions = [
    {
      title: 'Yangi kurs qo\'shish',
      description: 'Saytga yangi kurs qo\'shing',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      action: 'courses'
    },
    {
      title: 'O\'qituvchi qo\'shish',
      description: 'Yangi o\'qituvchi ma\'lumotlarini kiriting',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
      action: 'teachers'
    },
    {
      title: 'Sharh qo\'shish',
      description: 'Yangi o\'quvchi sharhini qo\'shing',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      action: 'testimonials'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-8 bg-gradient-to-r from-amber-400 to-orange-400 border-0 shadow-lg">
          <h2 className="text-3xl text-gray-900 mb-2">
            Xush kelibsiz, Admin!
          </h2>
          <p className="text-gray-800">
            Nodirschool saytini boshqarish paneli
          </p>
        </Card>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-0 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
              <p className="text-3xl text-gray-900">{stat.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xl text-gray-900 mb-4">Tez amallar</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card className="p-6 border-0 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg text-gray-900 mb-2">{action.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                  Boshlash
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="p-6 border-0 shadow-md">
            <h3 className="text-xl text-gray-900 mb-4">Sayt haqida</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Sayt holati:</span>
                <span className="text-green-600 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Faol
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Oxirgi yangilanish:</span>
                <span className="text-gray-900">Bugun, 14:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Jami sahifalar:</span>
                <span className="text-gray-900">8 ta</span>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="p-6 border-0 shadow-md">
            <h3 className="text-xl text-gray-900 mb-4">Yordam</h3>
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">
                Saytni boshqarishda yordam kerakmi?
              </p>
              <Button variant="outline" className="w-full">
                Qo'llanma
              </Button>
              <Button variant="outline" className="w-full">
                Texnik yordam
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
