import { Button } from '@/components/ui/button.jsx'
import { ArrowRight } from 'lucide-react'

const AdBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Центрированный контент */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              РЕКЛАМНЫЙ БЛОК
            </h2>
            <p className="text-xl text-orange-100 leading-relaxed">
              Разместите здесь информацию о ваших услугах или специальных предложениях. 
              Привлекайте внимание клиентов к важным акциям и новостям.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 font-semibold"
              >
                Подробнее
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 font-semibold"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdBanner

