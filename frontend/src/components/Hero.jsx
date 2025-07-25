import { Button } from '@/components/ui/button.jsx'
import { Play, ArrowRight, Shield, Users, FileText } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Центрированный контент */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4 mr-2" />
              Защита авторских прав
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8">
                <span>ПРАВООБЛАДАТЕЛЬ</span>
                <span className="text-lg lg:text-xl font-normal text-gray-600 lg:max-w-xs lg:text-left">
                  Автоматизированная система управления авторскими правами
                </span>
              </div>
              <span className="block text-blue-600 mt-2">АВТОМАТИЗИРОВАННАЯ СИСТЕМА</span>
              <span className="block text-gray-700 text-3xl lg:text-4xl mt-2">МЕНЕДЖМЕНТА</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Инновационная платформа для управления авторскими правами, создания договоров и защиты интеллектуальной собственности
            </p>
          </div>

          {/* Центрированные CTA кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          {/* Центрированная статистика */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
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

