import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ArrowLeft, Lock, User } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import logo from 'figma:asset/fa2cc7d7ed69c7eea426f4471d5309d3f85c7211.png';

interface LoginProps {
  onLoginSuccess: () => void;
  onBack: () => void;
}

export function Login({ onLoginSuccess, onBack }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simple validation (admin/admin123)
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        toast.success('Muvaffaqiyatli kirdingiz!');
        onLoginSuccess();
      } else {
        toast.error('Login yoki parol noto\'g\'ri!');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Back Button */}
      <Button
        onClick={onBack}
        variant="ghost"
        className="fixed top-6 left-6 text-gray-900 hover:bg-white/20"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Saytga qaytish
      </Button>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="p-8 border-0 shadow-2xl">
          <div className="text-center mb-8">
            <img src={logo} alt="Nodirschool" className="w-48 h-auto mx-auto mb-6" />
            <h2 className="text-3xl text-gray-900 mb-2">Dashboard kirish</h2>
            <p className="text-gray-600">Tizimga kirish uchun login va parol kiriting</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Login</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  placeholder="admin"
                  className="pl-10"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Parol</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 hover:from-amber-500 hover:to-orange-500"
              disabled={loading}
            >
              {loading ? 'Kirish...' : 'Kirish'}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Demo login ma'lumotlari:</p>
            <p className="text-sm">
              <span className="text-gray-900">Login:</span> admin<br />
              <span className="text-gray-900">Parol:</span> admin123
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
