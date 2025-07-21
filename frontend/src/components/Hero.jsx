import { Button } from '@/components/ui/button.jsx'
import { Play, ArrowRight, Shield, Users, FileText } from 'lucide-react'
import heroImage from '../assets/Home .jpg'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content - улучшенный контент */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4 mr-2" />
                Защита авторских прав
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                ПРАВООБЛАДАТЕЛЬ
                <span className="block text-blue-600 mt-2">АВТОМАТИЗИРОВАННАЯ СИСТЕМА</span>
                <span className="block text-gray-700 text-3xl lg:text-4xl mt-2">МЕНЕДЖМЕНТА</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Инновационная платформа для управления авторскими правами, создания договоров и защиты интеллектуальной собственности
              </p>
            </div>

            {/* Улучшенные CTA кнопки */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold">
                <Play className="h-5 w-5 mr-3" />
                Начать работу
                <ArrowRight className="h-5 w-5 ml-3" />
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-2">
                <FileText className="h-5 w-5 mr-3" />
                Узнать больше
              </Button>
            </div>

            {/* Статистика/преимущества */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Защищенных работ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>

          {/* Right content - улучшенное изображение */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Художница за работой" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Улучшенные floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileText className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Управление проектами</p>
                  <p className="text-sm text-gray-600">Создание и контроль</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <Users className="h-7 w-7 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Создание договоров</p>
                  <p className="text-sm text-gray-600">Автоматизация процессов</p>
                </div>
              </div>
            </div>

            {/* Дополнительный декоративный элемент */}
            <div className="absolute top-1/2 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-8 w-16 h-16 bg-purple-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-float delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-float delay-1000"></div>
      </div>
    </section>
  )
}

export default Hero

