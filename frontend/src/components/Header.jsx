import { Button } from '@/components/ui/button.jsx'
import { Search, Menu, LogIn } from 'lucide-react'
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - левая сторона */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">ASM RIGHTS</span>
            </div>
          </div>

          {/* Navigation - центр */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex space-x-6">
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
              <button 
                onClick={() => handleNavigation('services')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === 'services' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Услуги
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === 'about' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                О компании
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === 'contact' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Контакты
              </button>
            </div>
          </nav>

          {/* Right side - правая сторона */}
          <div className="flex items-center space-x-3 flex-shrink-0">
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
                    className={`transition-all duration-300 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
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

            {/* Auth button - только кнопка Вход */}
            <div className="hidden md:flex items-center">
              <Button variant="outline" size="sm" className="text-sm">
                <LogIn className="h-4 w-4 mr-2" />
                Вход
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="lg:hidden border-t border-gray-200 py-3">
          <nav className="flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => handleNavigation('home')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'home' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Главная
            </button>
            <button 
              onClick={() => handleNavigation('catalog')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'catalog' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Каталог
            </button>
            <button 
              onClick={() => handleNavigation('services')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'services' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Услуги
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'about' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              О компании
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 'contact' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Контакты
            </button>
          </nav>
          
          {/* Mobile search and auth */}
          <div className="mt-3 flex flex-col space-y-3">
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Поиск..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
            
            <div className="flex justify-center">
              <Button variant="outline" size="sm" className="text-sm">
                <LogIn className="h-4 w-4 mr-2" />
                Вход
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

