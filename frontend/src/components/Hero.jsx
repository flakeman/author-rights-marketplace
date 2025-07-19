import { Button } from '@/components/ui/button.jsx'
import { Play, FileText, Users } from 'lucide-react'
import heroImage from '../assets/Home .jpg'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                ПРАВООБЛАДАТЕЛЬ
              </h1>
              <p className="text-xl text-gray-600 mt-4 leading-relaxed">
                АВТОМАТИЗИРОВАННАЯ СИСТЕМА<br />
                МЕНЕДЖМЕНТА
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                <Play className="h-4 w-4 mr-2" />
                Обучение
              </Button>
              <Button variant="outline" className="px-8 py-3">
                <FileText className="h-4 w-4 mr-2" />
                Регистрация
              </Button>
              <Button variant="outline" className="px-8 py-3">
                <Users className="h-4 w-4 mr-2" />
                Вход
              </Button>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Художница за работой" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Управление проектами</p>
                  <p className="text-sm text-gray-600">Создание и контроль</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Создание договоров</p>
                  <p className="text-sm text-gray-600">Автоматизация процессов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

