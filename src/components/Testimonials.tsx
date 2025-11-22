import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Card } from './ui/card';

export function Testimonials() {
  const testimonials = [
    {
      name: "Aziza Yusupova",
      role: "Ingliz tili kursi bitiruvchisi",
      content: "Nodirschool'da o'qish menga katta yordam berdi. IELTS imtihonida 7.5 ball oldim. O'qituvchilar juda professional va muhit juda qulay!",
      rating: 5
    },
    {
      name: "Sardor Rahmonov",
      role: "Dasturlash kursi o'quvchisi",
      content: "Men bu yerda dasturlashni noldan boshladim. Hozir web-developer sifatida ishlayman. Juda minnatdorman!",
      rating: 5
    },
    {
      name: "Malika Saidova",
      role: "Matematika kursi o'quvchisi",
      content: "Olimpiadaga tayyorgarlik ko'rish uchun eng yaxshi joy. O'qituvchilar har bir mavzuni juda tushunarli tushuntiradilar.",
      rating: 5
    },
    {
      name: "Javohir Toshmatov",
      role: "Fizika kursi bitiruvchisi",
      content: "Fizikadan DTM imtihonida yuqori ball oldim. Nodirschool o'qituvchilariga katta rahmat!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-gray-900">O'quvchilar fikri</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bizning o'quvchilarimiz biz haqimizda nima deyishadi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                className="h-full"
              >
                <Card className="p-6 h-full bg-white hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="mt-auto">
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
