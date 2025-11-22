import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Plus, Phone, Mail, BookOpen, Star, Trash2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { toast } from 'sonner@2.0.3';

export function TeachersSection() {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: 'Alisher Karimov',
      subject: 'Ingliz tili',
      experience: '8 yil',
      certification: 'CELTA, IELTS 8.5',
      phone: '+998 99 111 22 33',
      email: 'alisher@nodirschool.uz',
      courses: 3,
      students: 120,
      rating: 4.9,
      image: 'teacher english male'
    },
    {
      id: 2,
      name: 'Nodira Sharipova',
      subject: 'Matematika',
      experience: '12 yil',
      certification: 'Fizika-matematika fanlari nomzodi',
      phone: '+998 99 222 33 44',
      email: 'nodira@nodirschool.uz',
      courses: 2,
      students: 95,
      rating: 5.0,
      image: 'teacher mathematics female'
    },
    {
      id: 3,
      name: 'Jamshid Tursunov',
      subject: 'Dasturlash',
      experience: '6 yil',
      certification: 'Senior Full-stack Developer',
      phone: '+998 99 333 44 55',
      email: 'jamshid@nodirschool.uz',
      courses: 2,
      students: 85,
      rating: 4.8,
      image: 'teacher programming male'
    },
    {
      id: 4,
      name: 'Dildora Rahimova',
      subject: 'Fizika',
      experience: '10 yil',
      certification: 'Fizika fanlari nomzodi',
      phone: '+998 99 444 55 66',
      email: 'dildora@nodirschool.uz',
      courses: 2,
      students: 70,
      rating: 4.9,
      image: 'teacher physics female'
    },
    {
      id: 5,
      name: 'Rustam Karimov',
      subject: 'Kimyo',
      experience: '9 yil',
      certification: 'Kimyo fanlari nomzodi',
      phone: '+998 99 555 66 77',
      email: 'rustam@nodirschool.uz',
      courses: 2,
      students: 65,
      rating: 4.7,
      image: 'teacher chemistry male'
    },
    {
      id: 6,
      name: 'Laylo Tursunova',
      subject: 'Mental arifmetika',
      experience: '5 yil',
      certification: 'Mental arifmetika o\'qituvchisi',
      phone: '+998 99 666 77 88',
      email: 'laylo@nodirschool.uz',
      courses: 1,
      students: 50,
      rating: 4.8,
      image: 'teacher mental arithmetic female'
    }
  ]);

  const [newTeacher, setNewTeacher] = useState({
    name: '',
    subject: '',
    experience: '',
    certification: '',
    phone: '',
    email: ''
  });

  const handleAddTeacher = () => {
    const teacher = {
      id: Date.now(),
      ...newTeacher,
      courses: 0,
      students: 0,
      rating: 5.0,
      image: 'teacher professional'
    };
    setTeachers([...teachers, teacher]);
    setNewTeacher({
      name: '',
      subject: '',
      experience: '',
      certification: '',
      phone: '',
      email: ''
    });
    toast.success('O\'qituvchi muvaffaqiyatli qo\'shildi!');
  };

  const handleDeleteTeacher = (id: number) => {
    setTeachers(teachers.filter(t => t.id !== id));
    toast.success('O\'qituvchi o\'chirildi!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl text-gray-900 mb-2">O'qituvchilar</h2>
          <p className="text-gray-600">Jami {teachers.length} ta o'qituvchi</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 hover:from-amber-500 hover:to-orange-500">
              <Plus className="w-5 h-5 mr-2" />
              Yangi o'qituvchi
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Yangi o'qituvchi qo'shish</DialogTitle>
              <DialogDescription>
                O'qituvchi ma'lumotlarini kiriting
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ism Familiya</Label>
                <Input
                  id="name"
                  placeholder="Alisher Karimov"
                  value={newTeacher.name}
                  onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Fan</Label>
                  <Input
                    id="subject"
                    placeholder="Ingliz tili"
                    value={newTeacher.subject}
                    onChange={(e) => setNewTeacher({...newTeacher, subject: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Tajriba</Label>
                  <Input
                    id="experience"
                    placeholder="8 yil"
                    value={newTeacher.experience}
                    onChange={(e) => setNewTeacher({...newTeacher, experience: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="certification">Sertifikat/Ma'lumoti</Label>
                <Input
                  id="certification"
                  placeholder="CELTA, IELTS 8.5"
                  value={newTeacher.certification}
                  onChange={(e) => setNewTeacher({...newTeacher, certification: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  placeholder="+998 99 111 22 33"
                  value={newTeacher.phone}
                  onChange={(e) => setNewTeacher({...newTeacher, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="alisher@nodirschool.uz"
                  value={newTeacher.email}
                  onChange={(e) => setNewTeacher({...newTeacher, email: e.target.value})}
                />
              </div>
            </div>
            <Button onClick={handleAddTeacher} className="w-full bg-gray-900 text-white">
              O'qituvchi qo'shish
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      {/* Teachers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher, index) => (
          <motion.div
            key={teacher.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
              {/* Teacher Image */}
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 relative">
                <ImageWithFallback
                  src={`https://source.unsplash.com/400x400/?${teacher.image}`}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm text-gray-900">{teacher.rating}</span>
                </div>
              </div>

              {/* Teacher Info */}
              <div className="p-6">
                <h3 className="text-2xl text-gray-900 mb-2">{teacher.name}</h3>
                <Badge className="mb-4 bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 border-0">
                  {teacher.subject}
                </Badge>

                <div className="space-y-2 text-sm mb-4">
                  <p className="text-gray-600">
                    <span className="text-gray-900">Tajriba:</span> {teacher.experience}
                  </p>
                  <p className="text-gray-600 text-xs">{teacher.certification}</p>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {teacher.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {teacher.email}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl text-gray-900 mb-1">{teacher.courses}</div>
                    <div className="text-xs text-gray-600">Kurslar</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl text-gray-900 mb-1">{teacher.students}</div>
                    <div className="text-xs text-gray-600">O'quvchilar</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Batafsil
                  </Button>
                  <Button 
                    variant="outline" 
                    className="text-red-600 hover:bg-red-50"
                    onClick={() => handleDeleteTeacher(teacher.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    O'chirish
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
