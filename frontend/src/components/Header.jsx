import { Button } from '@/components/ui/button.jsx'
import { User, Search, ShoppingCart, Menu, LogIn, UserPlus } from 'lucide-react'
import { useState } from 'react'

const Header = ({ currentPage, setCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Поиск:', searchQuery)
      // Здесь будет логика поиска
    }
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
          {/* Logo - увеличен размер */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">ASM RIGHTS</span>
            </div>
          </div>

          {/* Navigation - улучшенная структура */}
          <nav className="hidden lg:flex space-x-6 mx-auto">
            <button 
              onClick={() => handleNavigation('home')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'home' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Главная
            </button>
            <button 
              onClick={() => handleNavigation('catalog')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'catalog' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Каталог
            </button>
            <a href="#services" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 text-sm font-medium rounded-md transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 text-sm font-medium rounded-md transition-colors">
              О компании
            </a>
            <a href="#news" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 text-sm font-medium rounded-md transition-colors">
              Новости
            </a>
            <a href="#contacts" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 text-sm font-medium rounded-md transition-colors">
              Контакты
            </a>
          </nav>

          {/* Right side - улучшенная организация */}
          <div className="flex items-center space-x-3">
            {/* Search - улучшенный поиск */}
            <div className="hidden md:flex items-center">
              <form onSubmit={handleSearch} className="relative">
                <div className={`flex items-center transition-all duration-300 ${
                  isSearchExpanded ? 'w-64' : 'w-10'
                }`}>
                  <input
                    type="text"
                    placeholder="Поиск..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchExpanded(true)}
                    onBlur={() => {
                      if (!searchQuery) setIsSearchExpanded(false)
                    }}
                    className={`transition-all duration-300 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isSearchExpanded ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                  <Button 
                    type="submit"
                    variant="ghost" 
                    size="sm" 
                    className={`${isSearchExpanded ? 'absolute right-1' : ''}`}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Language selector */}
            <div className="hidden md:flex items-center space-x-2 px-2">
              <span className="text-sm text-gray-600">RU</span>
              <div className="w-6 h-4 bg-gradient-to-b from-white via-blue-500 to-red-500 rounded-sm border border-gray-300"></div>
            </div>

            {/* Auth buttons - перенесены в header */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="outline" size="sm" className="text-sm">
                <LogIn className="h-4 w-4 mr-2" />
                Вход
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-sm">
                <UserPlus className="h-4 w-4 mr-2" />
                Регистрация
              </Button>
            </div>

            {/* Contact button */}
            <Button className="hidden lg:flex bg-green-600 hover:bg-green-700 text-sm">
              Обратный звонок
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button 
                type="submit"
                variant="ghost" 
                size="sm" 
                className="absolute right-1 top-1/2 transform -translate-y-1/2"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header

