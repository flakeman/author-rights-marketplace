import { Button } from '@/components/ui/button.jsx'
import { Phone, Mail, MapPin, FileText, Users, Play, Shield, ExternalLink, Clock } from 'lucide-react'

const Footer = () => {
  const companyLinks = [
    { title: "О компании", href: "#about" },
    { title: "Наша команда", href: "#team" },
    { title: "Карьера", href: "#careers" },
    { title: "Партнеры", href: "#partners" }
  ]

  const serviceLinks = [
    { title: "Регистрация авторских прав", href: "#registration" },
    { title: "Управление проектами", href: "#projects" },
    { title: "Создание договоров", href: "#contracts" },
    { title: "Маркетплейс", href: "#marketplace" }
  ]

  const supportLinks = [
    { title: "Центр поддержки", href: "#support" },
    { title: "Часто задаваемые вопросы", href: "#faq" },
    { title: "Документация", href: "#docs" },
    { title: "Обучающие материалы", href: "#training" }
  ]

  const legalLinks = [
    { title: "Пользовательское соглашение", href: "#terms" },
    { title: "Политика конфиденциальности", href: "#privacy" },
    { title: "Правовая база", href: "#legal" },
    { title: "Лицензии", href: "#licenses" }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info - расширенная информация */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold">ASM RIGHTS</span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Автоматизированная система управления авторскими правами для авторов, 
              правообладателей и инвесторов. Мы обеспечиваем надежную защиту 
              интеллектуальной собственности и упрощаем процессы управления правами.
            </p>

            {/* Контактная информация */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">125315, Россия, г. Москва, Ленинградский проспект, д. 70</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">8-800-100-55-44 (бесплатно)</p>
                  <p className="text-gray-300 text-sm">8-800-100-55-02 (техподдержка)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@asmrights.ru</p>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Пн-Пт: 9:00-18:00 (МСК)</p>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-slate-800">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-slate-800">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-slate-800">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0956Z"/>
                </svg>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-slate-800">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* О компании */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">О компании</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                    {link.title}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">Услуги</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                    {link.title}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Поддержка</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                    {link.title}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter subscription */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Подпишитесь на новости</h3>
              <p className="text-gray-300 text-sm">Получайте последние обновления о законодательстве и новых возможностях платформы</p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.title}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-gray-400 text-sm">SSL защищено</span>
              </div>
              <p className="text-gray-400 text-sm">
                © 2024 ASM Rights. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

