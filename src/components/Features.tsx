import { motion } from 'motion/react';
import { Wifi, BookOpen, Award, Headphones, Coffee, Laptop } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Wifi,
      title: "Tezkor internet",
      description: "Yuqori tezlikdagi Wi-Fi barcha o'quvchilar uchun"
    },
    {
      icon: BookOpen,
      title: "Keng kutubxona",
      description: "Minglab darsliklar va qo'shimcha adabiyotlar"
    },
    {
      icon: Award,
      title: "Sertifikatlar",
      description: "Xalqaro tan olingan sertifikatlar beriladi"
    },
    {
      icon: Headphones,
      title: "Onlayn darslar",
      description: "Masofaviy ta'lim imkoniyati mavjud"
    },
    {
      icon: Coffee,
      title: "Shinam muhit",
      description: "Zamonaviy jihozlar va qulay xonalar"
    },
    {
      icon: Laptop,
      title: "Zamonaviy texnologiyalar",
      description: "Eng so'nggi dasturiy ta'minot va uskunalar"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-gray-900">Bizning imkoniyatlar</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            O'quvchilarimiz uchun eng yaxshi sharoitlarni yaratganmiz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 hover:bg-gray-50"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
