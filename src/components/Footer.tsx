import { motion } from 'motion/react';
import { Facebook, Instagram, Send, Youtube } from 'lucide-react';
import logo from 'figma:asset/fa2cc7d7ed69c7eea426f4471d5309d3f85c7211.png';

export function Footer() {
  const footerLinks = {
    "Kurslar": ["Ingliz tili", "Matematika", "Dasturlash", "Fizika", "Kimyo"],
    "Kompaniya": ["Biz haqimizda", "O'qituvchilar", "Yangiliklar", "Vakansiyalar"],
    "Yordam": ["FAQ", "Qo'llab-quvvatlash", "Shartlar", "Maxfiylik"]
  };

  const socialLinks = [
    { icon: Facebook, link: "#", name: "Facebook" },
    { icon: Instagram, link: "#", name: "Instagram" },
    { icon: Send, link: "#", name: "Telegram" },
    { icon: Youtube, link: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Nodirschool" className="w-48 h-auto mb-6 brightness-0 invert" />
            <p className="text-gray-400 mb-6">
              Zamonaviy ta'lim standartlari va professional o'qituvchilar bilan bilimingizni oshiring va kelajagingizni quring.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h3 className="text-xl mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-amber-400 transition-colors inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Nodirschool. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Foydalanish shartlari
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Maxfiylik siyosati
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
