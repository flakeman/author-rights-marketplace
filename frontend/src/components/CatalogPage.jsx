import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react'
import catalogImage from '../assets/Catalog.png'

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
      image: "/api/placeholder/300/200",
      description: "Оригинальная симфония в четырех частях, вдохновленная сменой времен года.",
      likes: 124,
      views: 1520
    },
    {
      id: 2,
      title: "Роман 'Последний рассвет'",
      author: "Михаил Иванов",
      category: "Литература",
      price: 75000,
      rating: 4.9,
      image: "/api/placeholder/300/200",
      description: "Захватывающий роман о любви и предательстве в послевоенное время.",
      likes: 89,
      views: 980
    },
    {
      id: 3,
      title: "Серия картин 'Городские пейзажи'",
      author: "Елена Смирнова",
      category: "Изобразительное искусство",
      price: 120000,
      rating: 4.7,
      image: "/api/placeholder/300/200",
      description: "Коллекция из 12 картин, отражающих красоту современного города.",
      likes: 156,
      views: 2100
    },
    {
      id: 4,
      title: "Фотопроект 'Дикая природа'",
      author: "Александр Козлов",
      category: "Фотография",
      price: 35000,
      rating: 4.6,
      image: "/api/placeholder/300/200",
      description: "Уникальные кадры дикой природы, снятые в заповедниках России.",
      likes: 203,
      views: 3400
    }
  ]

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Каталог произведений</h1>
              <p className="text-gray-600 mt-2">Найдите уникальные авторские произведения для лицензирования или покупки</p>
            </div>
            
            {/* Search and View Controls */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Поиск произведений..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Фильтры</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Categories */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-700">Категории</h4>
                {categories.map((category, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={index === 0 ? 'all' : category}
                      checked={selectedCategory === (index === 0 ? 'all' : category)}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600">{category}</span>
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div className="mt-6">
                <h4 className="font-medium text-gray-700 mb-3">Ценовой диапазон</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0 ₽</span>
                    <span>200,000 ₽</span>
                  </div>
                </div>
              </div>

              {/* Sort Options */}
              <div className="mt-6">
                <h4 className="font-medium text-gray-700 mb-3">Сортировка</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
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
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Найдено {filteredProjects.length} произведений
              </p>
            </div>

            {/* Projects Grid/List */}
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
            }>
              {filteredProjects.map((project) => (
                <div key={project.id} className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow ${
                  viewMode === 'list' ? 'flex gap-4 p-4' : 'overflow-hidden'
                }`}>
                  {/* Project Image */}
                  <div className={viewMode === 'list' ? 'w-48 h-32' : 'h-48'}>
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <div className="text-blue-400">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={viewMode === 'list' ? 'flex-1' : 'p-4'}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                        {project.title}
                      </h3>
                      <Button variant="ghost" size="sm" className="p-1">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-sm text-gray-600 mb-2">Автор: {project.author}</p>
                    <p className="text-sm text-blue-600 mb-3">{project.category}</p>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{project.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{project.likes}</span>
                      </div>
                      <div>
                        <span>{project.views} просмотров</span>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          {project.price.toLocaleString()} ₽
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => setCurrentPage('product')}
                        >
                          Подробнее
                        </Button>
                        <Button size="sm">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          В корзину
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Предыдущая</Button>
                <Button size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Следующая</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage

