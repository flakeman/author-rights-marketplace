import { Button } from '@/components/ui/button.jsx'
import { Calendar, ArrowRight, Eye } from 'lucide-react'

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "В России могут ввести новые правила защиты авторских прав на музыку",
      excerpt: "Минкультуры предложило изменения в законодательство об авторских правах, которые коснутся музыкальной индустрии и защиты прав авторов.",
      date: "15 декабря 2024",
      readTime: "5 мин",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Новые возможности для авторов: как заработать на своих произведениях",
      excerpt: "Обзор современных платформ и инструментов, которые помогают авторам монетизировать свои произведения и защищать авторские права.",
      date: "12 декабря 2024",
      readTime: "7 мин",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "В начале группы Олега Газманова подали иск на миллион за нарушение авторских прав",
      excerpt: "Правообладатели требуют компенсацию за незаконное использование музыкальных произведений без согласия авторов и выплаты роялти.",
      date: "10 декабря 2024",
      readTime: "3 мин",
      image: "/api/placeholder/300/200"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Центрированный Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Новости и статьи</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Следите за последними новостями в сфере авторских прав и интеллектуальной собственности
          </p>
        </div>

        {/* Центрированная News Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-blue-400">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <Eye className="h-4 w-4 mr-1" />
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  Читать далее
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </article>
          ))}
          </div>
        </div>

        {/* Центрированная кнопка "Все новости" */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3">
            Все новости
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection