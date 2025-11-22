import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.");
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+998 99 123 45 67",
      link: "tel:+998991234567"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@nodirschool.uz",
      link: "mailto:info@nodirschool.uz"
    },
    {
      icon: MapPin,
      title: "Manzil",
      content: "Toshkent sh., Chilonzor tumani",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-gray-900">Biz bilan bog'laning</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Savollaringiz bormi? Biz bilan bog'laning va bepul maslahat oling
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-3xl mb-6 text-gray-900">Xabar yuboring</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Ismingiz</label>
                  <Input
                    type="text"
                    placeholder="Ismingizni kiriting"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Telefon raqam</label>
                  <Input
                    type="tel"
                    placeholder="+998 99 123 45 67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Xabar</label>
                  <Textarea
                    placeholder="Xabaringizni yozing..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800" size="lg">
                  Yuborish
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 p-8 rounded-3xl text-gray-900">
              <h3 className="text-3xl mb-6">Aloqa ma'lumotlari</h3>
              <p className="mb-8">
                Biz har doim sizga yordam berishga tayyormiz. Quyidagi yo'llar orqali biz bilan bog'lanishingiz mumkin.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="mb-1">{info.title}</p>
                      <p className="text-gray-800">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-2xl mb-4 text-gray-900">Ish vaqti</h3>
              <div className="space-y-2 text-gray-600">
                <p>Dushanba - Juma: 9:00 - 20:00</p>
                <p>Shanba: 9:00 - 18:00</p>
                <p>Yakshanba: Dam olish kuni</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
