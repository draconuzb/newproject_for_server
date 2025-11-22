import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Statistics() {
  const stats = [
    { value: 500, label: "Faol o'quvchilar", suffix: "+" },
    { value: 15, label: "Turli kurslar", suffix: "+" },
    { value: 25, label: "Professional o'qituvchilar", suffix: "+" },
    { value: 98, label: "Mamnun o'quvchilar", suffix: "%" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-gray-900">Bizning yutuqlarimiz</h2>
          <p className="text-xl text-gray-800">
            Raqamlarda Nodirschool
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <CountUpNumber target={stat.value} suffix={stat.suffix} />
                <p className="text-gray-800 mt-2">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-6xl text-gray-900 mb-2">
      {count}{suffix}
    </div>
  );
}
