import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Building2, Mail, Phone, MapPin, Globe, Bell, Shield, Eye } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function SettingsSection() {
  const [settings, setSettings] = useState({
    orgName: 'Nodirschool',
    phone: '+998 99 123 45 67',
    email: 'info@nodirschool.uz',
    address: 'Toshkent sh., Chilonzor tumani',
    website: 'https://nodirschool.uz',
    emailNotifications: true,
    paymentNotifications: true,
    classReminders: false
  });

  const handleSave = () => {
    toast.success('Sozlamalar saqlandi!');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-3xl text-gray-900 mb-2">Sozlamalar</h2>
        <p className="text-gray-600">O'quv markazi sozlamalarini boshqaring</p>
      </div>

      {/* Organization Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">Tashkilot ma'lumotlari</h3>
              <p className="text-sm text-gray-600">Asosiy ma'lumotlarni tahrirlang</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orgName">Tashkilot nomi</Label>
              <Input 
                id="orgName" 
                value={settings.orgName}
                onChange={(e) => setSettings({...settings, orgName: e.target.value})}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    id="phone" 
                    className="pl-10" 
                    value={settings.phone}
                    onChange={(e) => setSettings({...settings, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    id="email" 
                    className="pl-10" 
                    value={settings.email}
                    onChange={(e) => setSettings({...settings, email: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Manzil</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input 
                  id="address" 
                  className="pl-10" 
                  value={settings.address}
                  onChange={(e) => setSettings({...settings, address: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Veb-sayt</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input 
                  id="website" 
                  className="pl-10" 
                  value={settings.website}
                  onChange={(e) => setSettings({...settings, website: e.target.value})}
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Notification Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">Bildirishnomalar</h3>
              <p className="text-sm text-gray-600">Bildirishnoma sozlamalarini boshqaring</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">Email bildirishnomalar</h4>
                <p className="text-sm text-gray-600">Yangi o'quvchilar haqida email orqali xabarnoma</p>
              </div>
              <Switch 
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">To'lov bildirishnomalari</h4>
                <p className="text-sm text-gray-600">To'lovlar haqida xabarnomalar</p>
              </div>
              <Switch 
                checked={settings.paymentNotifications}
                onCheckedChange={(checked) => setSettings({...settings, paymentNotifications: checked})}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">Dars eslatmalari</h4>
                <p className="text-sm text-gray-600">Darslar boshlanishidan oldin eslatma</p>
              </div>
              <Switch 
                checked={settings.classReminders}
                onCheckedChange={(checked) => setSettings({...settings, classReminders: checked})}
              />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Security Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">Xavfsizlik</h3>
              <p className="text-sm text-gray-600">Parol va xavfsizlik sozlamalari</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Joriy parol</Label>
              <div className="relative">
                <Eye className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input id="currentPassword" type="password" className="pl-10" />
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="newPassword">Yangi parol</Label>
              <div className="relative">
                <Eye className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input id="newPassword" type="password" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Parolni tasdiqlang</Label>
              <div className="relative">
                <Eye className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input id="confirmPassword" type="password" className="pl-10" />
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Parolni o'zgartirish
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Save Button */}
      <div className="flex justify-end gap-4">
        <Button variant="outline">Bekor qilish</Button>
        <Button onClick={handleSave} className="bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 hover:from-amber-500 hover:to-orange-500">
          Saqlash
        </Button>
      </div>
    </div>
  );
}
