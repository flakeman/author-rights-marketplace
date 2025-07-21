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

          {/* Right content - Removed image placeholder */}
          <div className="relative flex items-center justify-center">
            <p className="text-white/80 text-lg font-medium">Рекламный контент</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdBanner

