import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Plus, Edit, Trash2, Users, Clock, DollarSign } from 'lucide-react';
import { Progress } from '../ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { toast } from 'sonner@2.0.3';

export function CoursesSection() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Ingliz tili',
      level: 'Barcha darajalar',
      duration: '6 oy',
      students: 120,
      capacity: 150,
      price: '500,000',
      status: 'active',
      teacher: 'Alisher Karimov',
      schedule: 'Du-Chor-Ju, 16:00-18:00',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Matematika',
      level: '5-11 sinflar',
      duration: '9 oy',
      students: 95,
      capacity: 120,
      price: '450,000',
      status: 'active',
      teacher: 'Nodira Sharipova',
      schedule: 'Se-Pay-Sha, 15:00-17:00',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Dasturlash',
      level: 'Boshlang\'ich',
      duration: '8 oy',
      students: 85,
      capacity: 100,
      price: '600,000',
      status: 'active',
      teacher: 'Jamshid Tursunov',
      schedule: 'Du-Chor-Ju, 18:00-20:00',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Fizika',
      level: '8-11 sinflar',
      duration: '9 oy',
      students: 70,
      capacity: 100,
      price: '450,000',
      status: 'active',
      teacher: 'Dildora Rahimova',
      schedule: 'Se-Pay-Sha, 17:00-19:00',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Kimyo',
      level: '8-11 sinflar',
      duration: '9 oy',
      students: 65,
      capacity: 100,
      price: '450,000',
      status: 'active',
      teacher: 'Rustam Karimov',
      schedule: 'Du-Chor-Ju, 15:00-17:00',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 6,
      title: 'Mental arifmetika',
      level: '6-12 yosh',
      duration: '6 oy',
      students: 50,
      capacity: 60,
      price: '400,000',
      status: 'active',
      teacher: 'Laylo Tursunova',
      schedule: 'Se-Pay, 14:00-15:30',
      color: 'from-yellow-500 to-orange-500'
    }
  ]);

  const [newCourse, setNewCourse] = useState({
    title: '',
    level: '',
    duration: '',
    price: '',
    teacher: '',
    schedule: '',
    description: ''
  });

  const handleAddCourse = () => {
    const course = {
      id: Date.now(),
      ...newCourse,
      students: 0,
      capacity: 100,
      status: 'active',
      color: 'from-blue-500 to-cyan-500'
    };
    setCourses([...courses, course]);
    setNewCourse({
      title: '',
      level: '',
      duration: '',
      price: '',
      teacher: '',
      schedule: '',
      description: ''
    });
    toast.success('Kurs muvaffaqiyatli qo\'shildi!');
  };

  const handleDeleteCourse = (id: number) => {
    setCourses(courses.filter(c => c.id !== id));
    toast.success('Kurs o\'chirildi!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl text-gray-900 mb-2">Kurslar</h2>
          <p className="text-gray-600">Jami {courses.length} ta kurs</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 hover:from-amber-500 hover:to-orange-500">
              <Plus className="w-5 h-5 mr-2" />
              Yangi kurs
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Yangi kurs qo'shish</DialogTitle>
              <DialogDescription>
                Kurs ma'lumotlarini kiriting
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Kurs nomi</Label>
                  <Input
                    id="title"
                    placeholder="Ingliz tili"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="level">Daraja</Label>
                  <Input
                    id="level"
                    placeholder="Barcha darajalar"
                    value={newCourse.level}
                    onChange={(e) => setNewCourse({...newCourse, level: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Davomiyligi</Label>
                  <Input
                    id="duration"
                    placeholder="6 oy"
                    value={newCourse.duration}
                    onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Narxi (so'm)</Label>
                  <Input
                    id="price"
                    placeholder="500,000"
                    value={newCourse.price}
                    onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="teacher">O'qituvchi</Label>
                <Input
                  id="teacher"
                  placeholder="Alisher Karimov"
                  value={newCourse.teacher}
                  onChange={(e) => setNewCourse({...newCourse, teacher: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="schedule">Dars jadvali</Label>
                <Input
                  id="schedule"
                  placeholder="Du-Chor-Ju, 16:00-18:00"
                  value={newCourse.schedule}
                  onChange={(e) => setNewCourse({...newCourse, schedule: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Ta'rif</Label>
                <Textarea
                  id="description"
                  placeholder="Kurs haqida qisqacha ma'lumot..."
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                  rows={3}
                />
              </div>
            </div>
            <Button onClick={handleAddCourse} className="w-full bg-gray-900 text-white">
              Kurs qo'shish
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
              {/* Course Header */}
              <div className={`h-32 bg-gradient-to-br ${course.color} relative`}>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-red-600"
                    onClick={() => handleDeleteCourse(course.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-6">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                    {course.level}
                  </Badge>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-2xl text-gray-900 mb-3">{course.title}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">O'qituvchi:</span>
                    <span className="text-gray-900">{course.teacher}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Jadval:</span>
                    <span className="text-gray-900">{course.schedule}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      {course.price}
                    </div>
                  </div>
                </div>

                {/* Students Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      O'quvchilar
                    </div>
                    <span className="text-sm text-gray-900">
                      {course.students}/{course.capacity}
                    </span>
                  </div>
                  <Progress value={(course.students / course.capacity) * 100} className="h-2" />
                </div>

                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                  Batafsil
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
