import React, { useState } from 'react'

const ContactPage = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const offices = [
    {
      city: "Москва",
      address: "ул. Тверская, д. 15, офис 301",
      phone: "+7 (495) 123-45-67",
      email: "moscow@rightshub.ru",
      hours: "Пн-Пт: 9:00-18:00",
      coordinates: "55.7558, 37.6176"
    },
    {
      city: "Санкт-Петербург", 
      address: "Невский проспект, д. 28, офис 205",
      phone: "+7 (812) 987-65-43",
      email: "spb@rightshub.ru",
      hours: "Пн-Пт: 9:00-18:00",
      coordinates: "59.9311, 30.3609"
    },
    {
      city: "Екатеринбург",
      address: "ул. Ленина, д. 52, офис 412",
      phone: "+7 (343) 555-12-34",
      email: "ekb@rightshub.ru", 
      hours: "Пн-Пт: 10:00-19:00",
      coordinates: "56.8431, 60.6454"
    }
  ]

  const contactMethods = [
    {
      icon: "📞",
      title: "Телефон",
      value: "+7 (800) 123-45-67",
      description: "Бесплатный звонок по России"
    },
    {
      icon: "📧",
      title: "Email",
      value: "info@rightshub.ru",
      description: "Ответим в течение 2 часов"
    },
    {
      icon: "💬",
      title: "Telegram",
      value: "@rightshub_support",
      description: "Быстрая поддержка в мессенджере"
    },
    {
      icon: "🕐",
      title: "Режим работы",
      value: "Пн-Пт: 9:00-20:00",
      description: "Сб-Вс: 10:00-16:00"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Заголовок страницы */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Мы готовы ответить на все ваши вопросы и помочь защитить ваши авторские права. 
            Выберите удобный способ связи или заполните форму обратной связи.
          </p>
        </div>

        {/* Способы связи */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-lg font-semibold text-blue-600 mb-2">{method.value}</p>
              <p className="text-gray-600 text-sm">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Форма обратной связи */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Форма обратной связи</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Имя *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Тема обращения</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Выберите тему</option>
                    <option value="registration">Регистрация авторских прав</option>
                    <option value="protection">Защита прав</option>
                    <option value="licensing">Лицензирование</option>
                    <option value="consultation">Консультация</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Сообщение *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Опишите ваш вопрос или ситуацию..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Отправить сообщение
              </button>
            </form>
          </div>

          {/* Наши офисы */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наши офисы</h2>
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Адрес:</p>
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900">Телефон:</p>
                      <p className="text-gray-600">{office.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3">📧</span>
                    <div>
                      <p className="font-semibold text-gray-900">Email:</p>
                      <p className="text-gray-600">{office.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3">🕐</span>
                    <div>
                      <p className="font-semibold text-gray-900">Режим работы:</p>
                      <p className="text-gray-600">{office.hours}</p>
                    </div>
                  </div>
                </div>
                <button className="mt-4 bg-blue-100 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 transition-all duration-300">
                  Показать на карте
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ секция */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Сколько стоит регистрация авторских прав?</h3>
                <p className="text-gray-600">Стоимость зависит от типа произведения и сложности оформления. Базовая регистрация начинается от 5,000 рублей.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Как долго действует авторское право?</h3>
                <p className="text-gray-600">Авторское право действует в течение всей жизни автора и 70 лет после его смерти.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Можно ли зарегистрировать права онлайн?</h3>
                <p className="text-gray-600">Да, мы предоставляем услуги онлайн-регистрации с электронным документооборотом.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Какие документы нужны для регистрации?</h3>
                <p className="text-gray-600">Основные документы: заявление, экземпляр произведения, документ об уплате пошлины, паспорт автора.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Защищаете ли вы права в суде?</h3>
                <p className="text-gray-600">Да, наша команда юристов представляет интересы клиентов во всех судебных инстанциях.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Работаете ли вы с иностранными авторами?</h3>
                <p className="text-gray-600">Да, мы оказываем услуги авторам из любых стран в рамках международных соглашений.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Нужна консультация?</h3>
          <p className="text-xl mb-8 opacity-90">
            Получите бесплатную консультацию по защите ваших авторских прав
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Заказать звонок
            </button>
            <button 
              onClick={() => setCurrentPage('services')}
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Посмотреть услуги
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

