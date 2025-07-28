import { Button } from '@/components/ui/button.jsx'
import { Play, ArrowRight, Shield, Users, FileText, Star, CheckCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Центрированный контент */}
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium shadow-lg">
              <Shield className="h-5 w-5 mr-2" />
              Защита авторских прав нового поколения
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ПРАВООБЛАДАТЕЛЬ
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-600 mt-4">
                Автоматизированная система управления
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-600">
                авторскими правами
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Инновационная платформа для управления авторскими правами, создания договоров и защиты интеллектуальной собственности. 
              <span className="block mt-2 text-lg text-gray-500">
                Присоединяйтесь к тысячам авторов, которые уже защитили свои права
              </span>
            </p>
          </div>

          {/* Центрированные CTA кнопки */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-5 text-xl font-semibold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              Обучение
            </Button>
            <Button variant="outline" className="px-10 py-5 text-xl font-semibold border-2 border-gray-300 hover:border-blue-500 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              Регистрация
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-5 text-xl font-semibold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              Вход
            </Button>
            <Button variant="outline" className="px-10 py-5 text-xl font-semibold border-2 border-gray-300 hover:border-blue-500 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              Управление проектом
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-5 text-xl font-semibold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              Создание договоров
            </Button>
          </div>

          {/* Преимущества */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 font-medium">Бесплатная регистрация</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 font-medium">Юридическая поддержка</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 font-medium">Автоматизация процессов</span>
            </div>
          </div>

          {/* Центрированная статистика */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Защищенных работ</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Довольных клиентов</div>
              <div className="text-sm text-gray-500 mt-2">98% рейтинг удовлетворенности</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Поддержка</div>
              <div className="text-sm text-gray-500 mt-2">Среднее время ответа: 2 мин</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-200 rounded-full opacity-20 animate-pulse delay-300"></div>
      </div>
    </section>
  )
}

export default Hero

