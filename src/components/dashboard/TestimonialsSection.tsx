import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Plus, Edit, Trash2, Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Label } from '../ui/label';
import { toast } from 'sonner@2.0.3';

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Aziza Yusupova',
      role: 'Ingliz tili kursi bitiruvchisi',
      content: 'Nodirschool\'da o\'qish menga katta yordam berdi. IELTS imtihonida 7.5 ball oldim. O\'qituvchilar juda professional va muhit juda qulay!',
      rating: 5,
      image: 'student female 1'
    },
    {
      id: 2,
      name: 'Sardor Rahmonov',
      role: 'Dasturlash kursi o\'quvchisi',
      content: 'Men bu yerda dasturlashni noldan boshladim. Hozir web-developer sifatida ishlayman. Juda minnatdorman!',
      rating: 5,
      image: 'student male 1'
    },
    {
      id: 3,
      name: 'Malika Saidova',
      role: 'Matematika kursi o\'quvchisi',
      content: 'Olimpiadaga tayyorgarlik ko\'rish uchun eng yaxshi joy. O\'qituvchilar har bir mavzuni juda tushunarli tushuntiradilar.',
      rating: 5,
      image: 'student female 2'
    },
    {
      id: 4,
      name: 'Javohir Toshmatov',
      role: 'Fizika kursi bitiruvchisi',
      content: 'Fizikadan DTM imtihonida yuqori ball oldim. Nodirschool o\'qituvchilariga katta rahmat!',
      rating: 5,
      image: 'student male 2'
    }
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAdd = () => {
    const testimonial = {
      id: Date.now(),
      ...newTestimonial,
      image: 'student default'
    };
    setTestimonials([...testimonials, testimonial]);
    setNewTestimonial({ name: '', role: '', content: '', rating: 5 });
    toast.success('Sharh muvaffaqiyatli qo\'shildi!');
  };

  const handleDelete = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
    toast.success('Sharh o\'chirildi!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl text-gray-900 mb-2">Sharhlar</h2>
          <p className="text-gray-600">Jami {testimonials.length} ta sharh</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 hover:from-amber-500 hover:to-orange-500">
              <Plus className="w-5 h-5 mr-2" />
              Yangi sharh
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Yangi sharh qo'shish</DialogTitle>
              <DialogDescription>
                O'quvchi sharhi ma'lumotlarini kiriting
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ism Familiya</Label>
                <Input
                  id="name"
                  placeholder="Ism Familiya"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Lavozim/Kurs</Label>
                <Input
                  id="role"
                  placeholder="Masalan: Ingliz tili kursi bitiruvchisi"
                  value={newTestimonial.role}
                  onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Sharh matni</Label>
                <Textarea
                  id="content"
                  placeholder="Sharh matnini kiriting..."
                  value={newTestimonial.content}
                  onChange={(e) => setNewTestimonial({...newTestimonial, content: e.target.value})}
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label>Reyting</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewTestimonial({...newTestimonial, rating: star})}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newTestimonial.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Button onClick={handleAdd} className="w-full bg-gray-900 text-white">
              Sharh qo'shish
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-600"
                    onClick={() => handleDelete(testimonial.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="mt-auto">
                <p className="text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
