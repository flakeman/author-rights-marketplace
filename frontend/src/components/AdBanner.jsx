import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Shield, Clock, Award, Users } from 'lucide-react'

const AdBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
          {/* Центрированный контент */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
              <Award className="h-5 w-5 mr-2" />
              Специальное предложение для новых пользователей
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Защитите свои права
              <span className="block text-yellow-300">уже сегодня!</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Присоединяйтесь к тысячам авторов, которые уже защитили свою интеллектуальную собственность. 
              Получите бесплатную консультацию и начните зарабатывать на своих произведениях.
            </p>

            {/* Преимущества */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Shield className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">100% Защита</h3>
                <p className="text-blue-100 text-sm">Юридическая гарантия защиты ваших прав</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Clock className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Быстрая регистрация</h3>
                <p className="text-blue-100 text-sm">Защитите права за 5 минут</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Users className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Экспертная поддержка</h3>
                <p className="text-blue-100 text-sm">Команда юристов 24/7</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-10 py-4 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Начать бесплатно
                <ArrowRight className="h-6 w-6 ml-3" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 text-xl font-semibold rounded-xl backdrop-blur-sm"
              >
                Получить консультацию
              </Button>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">1000+</div>
                <div className="text-blue-100 text-sm">Защищенных работ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-blue-100 text-sm">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">98%</div>
                <div className="text-blue-100 text-sm">Успешных дел</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-blue-100 text-sm">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-yellow-300/20 rounded-full animate-pulse delay-700"></div>
      </div>
    </section>
  )
}

export default AdBanner

