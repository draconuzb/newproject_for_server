import { motion } from 'motion/react';
import { Target, Users, Award, Zap } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: "Maqsadga yo'naltirilgan",
      description: "Har bir o'quvchining maqsadiga erishishiga yordam beramiz"
    },
    {
      icon: Users,
      title: "Jamoaviy yondashuv",
      description: "Kichik guruhlarda intensiv mashg'ulotlar o'tkazamiz"
    },
    {
      icon: Award,
      title: "Sifatli ta'lim",
      description: "Xalqaro standartlarga mos ta'lim dasturlari"
    },
    {
      icon: Zap,
      title: "Zamonaviy texnologiyalar",
      description: "Eng so'nggi texnologiyalar va metodikalardan foydalanamiz"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-gray-900">Biz haqimizda</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nodirschool - bu zamonaviy ta'lim standartlari va innovatsion yondashuvlar bilan o'quv markazidir
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl h-full transition-all duration-300 hover:shadow-2xl"
                style={{
                  transform: 'perspective(1000px) rotateX(0deg)',
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
