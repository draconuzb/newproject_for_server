import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Teachers() {
  const teachers = [
    {
      name: "Alisher Karimov",
      subject: "Ingliz tili",
      experience: "8 yil tajriba",
      certification: "CELTA, IELTS 8.5",
      image: "teacher english"
    },
    {
      name: "Nodira Sharipova",
      subject: "Matematika",
      experience: "12 yil tajriba",
      certification: "Fizika-matematika fanlari nomzodi",
      image: "teacher mathematics"
    },
    {
      name: "Jamshid Tursunov",
      subject: "Dasturlash",
      experience: "6 yil tajriba",
      certification: "Senior Full-stack Developer",
      image: "teacher programming"
    },
    {
      name: "Dildora Rahimova",
      subject: "Fizika",
      experience: "10 yil tajriba",
      certification: "Fizika fanlari nomzodi",
      image: "teacher physics"
    }
  ];

  return (
    <section id="teachers" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-gray-900">Bizning o'qituvchilar</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tajribali va malakali mutaxassislar bilan o'rganing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gray-50 shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/400x400/?${teacher.image}`}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-gray-900">{teacher.name}</h3>
                  <Badge className="mb-3 bg-amber-400 text-gray-900">
                    {teacher.subject}
                  </Badge>
                  <p className="text-gray-600 text-sm mb-2">{teacher.experience}</p>
                  <p className="text-gray-500 text-sm">{teacher.certification}</p>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-amber-400/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <p className="text-gray-900 px-6 text-center">
                    Professional o'qituvchi
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
