import { Button } from '@/components/ui/button.jsx'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink,
  MessageCircle,
  FileText,
  Users,
  TrendingUp,
  Bell
} from 'lucide-react'

const Sidebar = () => {
  const quickLinks = [
    { icon: FileText, title: "Часто задаваемые вопросы", href: "#faq" },
    { icon: Users, title: "Поддержка клиентов", href: "#support" },
    { icon: TrendingUp, title: "Тарифы и цены", href: "#pricing" },
    { icon: Bell, title: "Уведомления", href: "#notifications" }
  ]

  const newsItems = [
    {
      title: "Обновление законодательства об авторских правах",
      date: "15 января 2024",
      excerpt: "Новые изменения в законодательстве, которые важно знать каждому автору..."
    },
    {
      title: "Запуск новой функции автоматического мониторинга",
      date: "10 января 2024", 
      excerpt: "Теперь система может автоматически отслеживать нарушения ваших прав..."
    },
    {
      title: "Интеграция с международными базами данных",
      date: "5 января 2024",
      excerpt: "Расширили возможности поиска и защиты на международном уровне..."
    }
  ]

  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* Быстрые действия */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
          Быстрые действия
        </h3>
        <div className="space-y-3">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <link.icon className="h-4 w-4 text-gray-500 group-hover:text-blue-600 mr-3" />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">{link.title}</span>
              <ExternalLink className="h-3 w-3 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>

      {/* Контактная информация */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Связаться с нами</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-blue-600 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-900">+7 (495) 123-45-67</p>
              <p className="text-xs text-gray-600">Горячая линия</p>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 text-blue-600 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-900">info@asmrights.ru</p>
              <p className="text-xs text-gray-600">Общие вопросы</p>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-blue-600 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-900">Москва, ул. Примерная, 123</p>
              <p className="text-xs text-gray-600">Офис</p>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-blue-600 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-900">Пн-Пт: 9:00-18:00</p>
              <p className="text-xs text-gray-600">Время работы</p>
            </div>
          </div>
        </div>
        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
          <MessageCircle className="h-4 w-4 mr-2" />
          Написать в чат
        </Button>
      </div>

      {/* Новости и обновления */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Bell className="h-5 w-5 mr-2 text-green-600" />
          Новости и обновления
        </h3>
        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
              <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 mb-2">{item.date}</p>
              <p className="text-xs text-gray-600 line-clamp-2">{item.excerpt}</p>
              <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-1 inline-block">
                Читать далее →
              </a>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4 text-sm">
          Все новости
        </Button>
      </div>

      {/* Социальные сети */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Мы в социальных сетях</h3>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm" className="flex-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </Button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

