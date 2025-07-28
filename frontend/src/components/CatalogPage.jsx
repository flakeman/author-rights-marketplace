import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, Eye, Download } from 'lucide-react'

const CatalogPage = ({ setCurrentPage }) => {
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [showFilters, setShowFilters] = useState(false)

  // Mock data for demonstration
  const categories = [
    'Все категории',
    'Музыка',
    'Литература', 
    'Изобразительное искусство',
    'Фотография',
    'Видео',
    'Программное обеспечение',
    'Дизайн'
  ]

  const mockProjects = [
    {
      id: 1,
      title: "Симфония 'Времена года'",
      author: "Анна Петрова",
      category: "Музыка",
      price: 50000,
      rating: 4.8,
      image: "🎵",
      description: "Оригинальная симфония в четырех частях, вдохновленная сменой времен года. Произведение включает в себя элементы классической и современной музыки.",
      likes: 124,
      views: 1520,
      downloads: 45,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Роман 'Последний рассвет'",
      author: "Михаил Иванов",
      category: "Литература",
      price: 75000,
      rating: 4.9,
      image: "📚",
      description: "Захватывающий роман о любви и предательстве в послевоенное время. 450 страниц увлекательного повествования.",
      likes: 89,
      views: 980,
      downloads: 23,
      date: "2024-02-03"
    },
    {
      id: 3,
      title: "Серия картин 'Городские пейзажи'",
      author: "Елена Смирнова",
      category: "Изобразительное искусство",
      price: 120000,
      rating: 4.7,
      image: "🎨",
      description: "Коллекция из 12 картин, отражающих красоту современного города. Выполнены в технике масляной живописи.",
      likes: 156,
      views: 2100,
      downloads: 67,
      date: "2024-01-28"
    },
    {
      id: 4,
      title: "Фотопроект 'Дикая природа'",
      author: "Александр Козлов",
      category: "Фотография",
      price: 35000,
      rating: 4.6,
      image: "📸",
      description: "Уникальные кадры дикой природы, снятые в заповедниках России. Высокое разрешение, профессиональная обработка.",
      likes: 203,
      views: 3400,
      downloads: 89,
      date: "2024-02-10"
    },
    {
      id: 5,
      title: "Мобильное приложение 'EcoTracker'",
      author: "Дмитрий Волков",
      category: "Программное обеспечение",
      price: 95000,
      rating: 4.8,
      image: "💻",
      description: "Инновационное приложение для отслеживания экологического следа. Включает исходный код и документацию.",
      likes: 78,
      views: 1200,
      downloads: 34,
      date: "2024-01-20"
    },
    {
      id: 6,
      title: "Логотипы и фирменный стиль",
      author: "Ольга Петрова",
      category: "Дизайн",
      price: 45000,
      rating: 4.9,
      image: "✨",
      description: "Коллекция из 50 уникальных логотипов и элементов фирменного стиля для различных сфер бизнеса.",
      likes: 167,
      views: 2800,
      downloads: 112,
      date: "2024-02-05"
    }
  ]

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Каталог произведений
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              Найдите уникальные авторские произведения для лицензирования или покупки. 
              Более 1000 работ от талантливых авторов со всей России.
            </p>
          </div>
          
          {/* Search and View Controls */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Поиск произведений, авторов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-6 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent w-80 text-lg"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="lg"
                onClick={() => setViewMode('grid')}
                className="rounded-xl"
              >
                <Grid className="h-5 w-5 mr-2" />
                Сетка
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="lg"
                onClick={() => setViewMode('list')}
                className="rounded-xl"
              >
                <List className="h-5 w-5 mr-2" />
                Список
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Фильтры</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Categories */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-gray-700">Категории</h4>
                {categories.map((category, index) => (
                  <label key={index} className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      value={index === 0 ? 'all' : category}
                      checked={selectedCategory === (index === 0 ? 'all' : category)}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-3 w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                      {category}
                    </span>
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Ценовой диапазон</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0 ₽</span>
                    <span>200,000 ₽</span>
                  </div>
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Сортировка</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="newest">Сначала новые</option>
                  <option value="oldest">Сначала старые</option>
                  <option value="price-low">Цена: по возрастанию</option>
                  <option value="price-high">Цена: по убыванию</option>
                  <option value="rating">По рейтингу</option>
                  <option value="popular">По популярности</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-lg text-gray-600">
                Найдено <span className="font-semibold text-blue-600">{filteredProjects.length}</span> произведений
              </p>
            </div>

            {/* Projects Grid/List */}
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              : "space-y-6"
            }>
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    viewMode === 'list' ? 'flex gap-6 p-6' : 'overflow-hidden'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className={viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'h-48'}>
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center rounded-xl">
                      <div className="text-6xl">
                        {project.image}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={viewMode === 'list' ? 'flex-1' : 'p-6'}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                        {project.title}
                      </h3>
                      <Button variant="ghost" size="sm" className="p-2 hover:bg-red-50 hover:text-red-500">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>

                    <p className="text-blue-600 font-semibold mb-2">Автор: {project.author}</p>
                    <p className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block mb-4">
                      {project.category}
                    </p>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-semibold">{project.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-red-400" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{project.downloads}</span>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-gray-900">
                          {project.price.toLocaleString()} ₽
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => setCurrentPage('product')}
                          className="rounded-xl"
                        >
                          Подробнее
                        </Button>
                        <Button 
                          size="sm"
                          className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          В корзину
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="rounded-xl">Предыдущая</Button>
                <Button size="lg" className="rounded-xl">1</Button>
                <Button variant="outline" size="lg" className="rounded-xl">2</Button>
                <Button variant="outline" size="lg" className="rounded-xl">3</Button>
                <Button variant="outline" size="lg" className="rounded-xl">Следующая</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage



