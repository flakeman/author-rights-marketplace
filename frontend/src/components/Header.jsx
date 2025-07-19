import { Button } from '@/components/ui/button.jsx'
import { User, Search, ShoppingCart, Menu } from 'lucide-react'

const Header = ({ currentPage, setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ASM RIGHTS</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={`px-3 py-2 text-sm font-medium ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Главная
            </button>
            <button 
              onClick={() => handleNavigation('catalog')}
              className={`px-3 py-2 text-sm font-medium ${
                currentPage === 'catalog' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Каталог
            </button>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Услуги
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              О компании
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Новости и статьи
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Правовая база
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Контакты
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4 mr-2" />
              Поиск
            </Button>
            
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Rus</span>
              <div className="w-6 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                <div className="w-4 h-2 bg-blue-500 rounded-sm"></div>
              </div>
            </div>

            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Личный кабинет
            </Button>

            <Button className="bg-blue-600 hover:bg-blue-700">
              Обратный звонок
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

