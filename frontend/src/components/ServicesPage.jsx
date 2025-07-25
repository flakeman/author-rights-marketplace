import React from 'react'

const ServicesPage = ({ setCurrentPage }) => {
  const services = [
    {
      id: 1,
      title: "Регистрация авторских прав",
      description: "Полная регистрация ваших произведений в государственных органах с получением официальных документов.",
      price: "от 5,000 ₽",
      duration: "7-14 дней",
      features: [
        "Подготовка документов",
        "Подача заявления",
        "Получение свидетельства",
        "Консультации юриста"
      ],
      icon: "📋"
    },
    {
      id: 2,
      title: "Защита интеллектуальной собственности",
      description: "Комплексная защита ваших авторских прав от нарушений и незаконного использования.",
      price: "от 15,000 ₽",
      duration: "30-60 дней",
      features: [
        "Мониторинг нарушений",
        "Досудебное урегулирование",
        "Судебная защита",
        "Взыскание компенсации"
      ],
      icon: "🛡️"
    },
    {
      id: 3,
      title: "Лицензирование произведений",
      description: "Оформление лицензионных договоров для легального использования ваших произведений.",
      price: "от 8,000 ₽",
      duration: "5-10 дней",
      features: [
        "Составление договора",
        "Определение стоимости",
        "Юридическое сопровождение",
        "Контроль исполнения"
      ],
      icon: "📄"
    },
    {
      id: 4,
      title: "Консультации по авторскому праву",
      description: "Профессиональные консультации по всем вопросам авторского права и интеллектуальной собственности.",
      price: "от 2,000 ₽",
      duration: "1 час",
      features: [
        "Анализ ситуации",
        "Правовые рекомендации",
        "Стратегия защиты",
        "Письменное заключение"
      ],
      icon: "💬"
    },
    {
      id: 5,
      title: "Депонирование произведений",
      description: "Безопасное хранение ваших произведений с подтверждением даты создания.",
      price: "от 1,500 ₽",
      duration: "1-3 дня",
      features: [
        "Электронное депонирование",
        "Временная метка",
        "Сертификат депонирования",
        "Долгосрочное хранение"
      ],
      icon: "🏦"
    },
    {
      id: 6,
      title: "Оценка интеллектуальной собственности",
      description: "Профессиональная оценка стоимости ваших авторских прав для различных целей.",
      price: "от 10,000 ₽",
      duration: "10-15 дней",
      features: [
        "Рыночный анализ",
        "Оценочный отчет",
        "Экспертное заключение",
        "Сопровождение сделок"
      ],
      icon: "💰"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Заголовок страницы */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Наши услуги
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Полный спектр услуг по защите и управлению авторскими правами. 
            Профессиональная поддержка на всех этапах работы с интеллектуальной собственностью.
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Стоимость:</span>
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Срок:</span>
                  <span className="font-semibold text-gray-900">{service.duration}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Что включено:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Заказать услугу
              </button>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Почему выбирают нас?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-500 text-xl mr-3">🏆</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Опыт более 10 лет</h4>
                    <p className="text-gray-600">Успешно защищаем права авторов с 2013 года</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 text-xl mr-3">⚡</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Быстрое оформление</h4>
                    <p className="text-gray-600">Минимальные сроки обработки документов</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 text-xl mr-3">🔒</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">100% конфиденциальность</h4>
                    <p className="text-gray-600">Гарантируем полную защиту ваших данных</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 text-xl mr-3">💼</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Юридическая поддержка</h4>
                    <p className="text-gray-600">Команда опытных юристов к вашим услугам</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Как мы работаем?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Консультация</h4>
                    <p className="text-gray-600">Анализируем вашу ситуацию и потребности</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Подготовка</h4>
                    <p className="text-gray-600">Готовим необходимые документы</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Оформление</h4>
                    <p className="text-gray-600">Подаем документы в соответствующие органы</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Результат</h4>
                    <p className="text-gray-600">Получаете готовые документы и поддержку</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Готовы защитить свои авторские права?</h3>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами для бесплатной консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Связаться с нами
            </button>
            <button 
              onClick={() => setCurrentPage('catalog')}
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Посмотреть каталог
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage

