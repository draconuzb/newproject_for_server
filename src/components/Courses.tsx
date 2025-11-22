import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, Users, BarChart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Courses() {
  const courses = [
    {
      title: "Ingliz tili",
      level: "Barcha darajalar",
      duration: "6 oy",
      students: "120",
      description: "IELTS va CEFR standartlariga mos holda ingliz tilini o'rganing",
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      title: "Matematika",
      level: "5-11 sinflar",
      duration: "9 oy",
      students: "95",
      description: "Maktab dasturi va olimpiada masalalarini chuqur o'rganish",
      color: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      title: "Dasturlash",
      level: "Boshlang'ich",
      duration: "8 oy",
      students: "85",
      description: "Python, JavaScript va web development asoslari",
      color: "from-green-500 to-emerald-500",
      popular: true
    },
    {
      title: "Fizika",
      level: "8-11 sinflar",
      duration: "9 oy",
      students: "70",
      description: "Nazariya va amaliy mashg'ulotlar orqali fizikani o'rganing",
      color: "from-orange-500 to-red-500",
      popular: false
    },
    {
      title: "Kimyo",
      level: "8-11 sinflar",
      duration: "9 oy",
      students: "65",
      description: "Organik va anorganik kimyo bo'yicha chuqur bilim",
      color: "from-teal-500 to-blue-500",
      popular: false
    },
    {
      title: "Mental arifmetika",
      level: "6-12 yosh",
      duration: "6 oy",
      students: "50",
      description: "Bolalar uchun aqliy rivojlanish va tez hisoblash",
      color: "from-yellow-500 to-orange-500",
      popular: true
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-gray-900">Kurslarimiz</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turli yo'nalishlarda professional o'qituvchilar bilan sifatli ta'lim oling
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className={`h-48 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  {course.popular && (
                    <Badge className="absolute top-4 right-4 bg-white text-gray-900">
                      Mashhur
                    </Badge>
                  )}
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl mb-2 text-gray-900">{course.title}</h3>
                  <Badge variant="outline" className="w-fit mb-4">{course.level}</Badge>
                  
                  <p className="text-gray-600 mb-6 flex-1">{course.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{course.students} o'quvchi</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                    Batafsil ma'lumot
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
