import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Star, Heart, Share2, Download, Eye, Calendar, Tag, User, Shield, FileText, ShoppingCart } from 'lucide-react'
import productImage from '../assets/Product.png'

const ProductPage = () => {
  const [selectedTab, setSelectedTab] = useState('description')
  const [quantity, setQuantity] = useState(1)

  // Mock product data
  const product = {
    id: 1,
    title: "Симфония 'Времена года'",
    author: {
      name: "Анна Петрова",
      avatar: "/api/placeholder/50/50",
      rating: 4.9,
      worksCount: 23,
      verified: true
    },
    category: "Музыка",
    subcategory: "Классическая музыка",
    price: 50000,
    originalPrice: 65000,
    rating: 4.8,
    reviewsCount: 47,
    views: 1520,
    likes: 124,
    createdAt: "2024-01-15",
    description: "Оригинальная симфония в четырех частях, вдохновленная сменой времен года. Каждая часть отражает уникальную атмосферу и настроение определенного сезона, создавая целостное музыкальное произведение, которое переносит слушателя через весь годовой цикл.",
    fullDescription: `Симфония "Времена года" представляет собой масштабное музыкальное произведение, состоящее из четырех частей:

1. "Весеннее пробуждение" - легкая и воздушная мелодия, символизирующая возрождение природы
2. "Летний зной" - энергичная и страстная музыка, передающая жар летних дней
3. "Осенняя меланхолия" - задумчивая и лирическая часть о красоте увядания
4. "Зимняя сказка" - торжественная и величественная финальная часть

Произведение написано для полного симфонического оркестра и длится около 45 минут. Симфония была впервые исполнена Московским филармоническим оркестром в 2024 году и получила высокие оценки критиков.`,
    specifications: {
      duration: "45 минут",
      instruments: "Полный симфонический оркестр",
      key: "До мажор",
      tempo: "Переменный",
      difficulty: "Высокая",
      pages: "120 страниц партитуры"
    },
    license: {
      type: "Стандартная лицензия",
      commercial: true,
      modifications: false,
      distribution: true,
      territory: "Россия и СНГ",
      duration: "5 лет"
    },
    files: [
      { name: "Полная партитура.pdf", size: "15.2 MB", type: "PDF" },
      { name: "Аудио запись.mp3", size: "42.1 MB", type: "MP3" },
      { name: "MIDI файл.mid", size: "2.8 MB", type: "MIDI" }
    ],
    tags: ["симфония", "классическая музыка", "оркестр", "времена года", "инструментальная"]
  }

  const reviews = [
    {
      id: 1,
      author: "Михаил Волков",
      rating: 5,
      date: "2024-02-15",
      text: "Потрясающее произведение! Каждая часть симфонии передает уникальную атмосферу времени года. Особенно впечатлила зимняя часть - очень торжественно и красиво."
    },
    {
      id: 2,
      author: "Елена Соколова",
      rating: 4,
      date: "2024-02-10",
      text: "Качественная работа, хорошая оркестровка. Рекомендую для использования в театральных постановках."
    }
  ]

  const relatedProducts = [
    { id: 2, title: "Концерт для фортепиано", author: "Анна Петрова", price: 35000, image: "/api/placeholder/200/150" },
    { id: 3, title: "Струнный квартет №3", author: "Анна Петрова", price: 28000, image: "/api/placeholder/200/150" },
    { id: 4, title: "Соната для скрипки", author: "Анна Петрова", price: 22000, image: "/api/placeholder/200/150" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600">Главная</a>
            <span>/</span>
            <a href="#" className="hover:text-blue-600">Каталог</a>
            <span>/</span>
            <a href="#" className="hover:text-blue-600">{product.category}</a>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
              <div className="text-blue-400">
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
            </div>
            
            {/* Thumbnail gallery */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Author */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-900">{product.author.name}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span>{product.author.rating}</span>
                      <span>•</span>
                      <span>{product.author.worksCount} работ</span>
                      {product.author.verified && (
                        <>
                          <span>•</span>
                          <Shield className="h-3 w-3 text-green-500" />
                          <span className="text-green-600">Верифицирован</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Category and Tags */}
              <div className="flex items-center gap-2 mb-4">
                <Tag className="h-4 w-4 text-gray-400" />
                <span className="text-blue-600 font-medium">{product.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{product.subcategory}</span>
              </div>

              {/* Rating and Stats */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500">({product.reviewsCount} отзывов)</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{product.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{product.likes}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  {product.price.toLocaleString()} ₽
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()} ₽
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              
              {/* License Info */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-blue-900">{product.license.type}</span>
                </div>
                <div className="text-sm text-blue-700 space-y-1">
                  <p>• Коммерческое использование: {product.license.commercial ? 'Разрешено' : 'Запрещено'}</p>
                  <p>• Территория: {product.license.territory}</p>
                  <p>• Срок действия: {product.license.duration}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Купить лицензию
                  </Button>
                  <Button variant="outline">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Скачать превью
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Дата создания:</span>
                <p className="font-medium">{new Date(product.createdAt).toLocaleDateString('ru-RU')}</p>
              </div>
              <div>
                <span className="text-gray-500">Длительность:</span>
                <p className="font-medium">{product.specifications.duration}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'description', label: 'Описание' },
                { id: 'specifications', label: 'Характеристики' },
                { id: 'files', label: 'Файлы' },
                { id: 'reviews', label: `Отзывы (${product.reviewsCount})` }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {selectedTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="whitespace-pre-line text-gray-700">
                  {product.fullDescription}
                </div>
                
                {/* Tags */}
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-3">Теги:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'files' && (
              <div className="space-y-4">
                {product.files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-500">{file.size} • {file.type}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Скачать
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">{review.author}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-3 w-3 ${
                                  star <= review.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString('ru-RU')}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Другие работы автора</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      {item.price.toLocaleString()} ₽
                    </span>
                    <Button size="sm" variant="outline">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage

