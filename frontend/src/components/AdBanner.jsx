import { Button } from '@/components/ui/button.jsx'
import { ArrowRight } from 'lucide-react'

const AdBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight">
              РЕКЛАМНЫЙ<br />
              БЛОК
            </h2>
            <p className="text-xl text-orange-100">
              Разместите здесь информацию о ваших услугах или специальных предложениях
            </p>
            <Button 
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3"
            >
              Подробнее
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Right content - Image placeholder */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="text-white/80">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg font-medium">Рекламное изображение</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdBanner

