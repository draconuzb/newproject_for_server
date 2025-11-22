import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import logo from 'figma:asset/fa2cc7d7ed69c7eea426f4471d5309d3f85c7211.png';

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <img src={logo} alt="Nodirschool" className="w-48 h-auto" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#about" className="text-gray-900 hover:text-gray-700 transition-colors">Biz haqimizda</a>
            <a href="#courses" className="text-gray-900 hover:text-gray-700 transition-colors">Kurslar</a>
            <a href="#teachers" className="text-gray-900 hover:text-gray-700 transition-colors">O'qituvchilar</a>
            <a href="#contact" className="text-gray-900 hover:text-gray-700 transition-colors">Bog'lanish</a>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">
              Ro'yxatdan o'tish
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <GraduationCap className="w-5 h-5" />
                <span className="text-gray-900">Professional Ta'lim Markazi</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl mb-6 text-gray-900">
                Kelajagingizni
                <br />
                <span className="italic">Nodirschool</span> bilan
                <br />
                quring
              </h1>
              
              <p className="text-xl text-gray-800 mb-8 max-w-lg">
                Zamonaviy ta'lim dasturlari va professional o'qituvchilar bilan bilimingizni oshiring va muvaffaqiyatga erishing.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 group">
                  Kursni boshlash
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-gray-900 text-gray-900 hover:bg-white/30">
                  Batafsil ma'lumot
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-4xl text-gray-900 mb-1">500+</div>
                  <div className="text-gray-800">O'quvchilar</div>
                </div>
                <div>
                  <div className="text-4xl text-gray-900 mb-1">15+</div>
                  <div className="text-gray-800">Kurslar</div>
                </div>
                <div>
                  <div className="text-4xl text-gray-900 mb-1">98%</div>
                  <div className="text-gray-800">Mamnunlik</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="relative">
              <motion.div
                className="relative z-10 bg-white rounded-3xl shadow-2xl p-8"
                style={{
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                }}
                whileHover={{
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-32 h-32 text-amber-400" />
                </div>
                
                <motion.div
                  className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-2xl shadow-xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-2xl">🎓</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gray-900 text-white p-4 rounded-2xl shadow-xl"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <div className="text-2xl">📚</div>
                </motion.div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-8 -right-8 w-full h-full bg-gradient-to-br from-orange-300 to-amber-300 rounded-3xl opacity-50 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
