import React from 'react'

const AboutPage = ({ setCurrentPage }) => {
  const team = [
    {
      name: "Анна Петрова",
      position: "Генеральный директор",
      experience: "15 лет в сфере интеллектуальной собственности",
      education: "МГУ, юридический факультет",
      photo: "👩‍💼",
      description: "Эксперт в области авторского права с многолетним опытом ведения сложных дел."
    },
    {
      name: "Михаил Сидоров",
      position: "Ведущий юрист",
      experience: "12 лет судебной практики",
      education: "СПбГУ, интеллектуальная собственность",
      photo: "👨‍💼",
      description: "Специализируется на защите авторских прав в судах всех инстанций."
    },
    {
      name: "Елена Козлова",
      position: "Руководитель отдела регистрации",
      experience: "10 лет в Роспатенте",
      education: "МГЮА, патентное право",
      photo: "👩‍💻",
      description: "Эксперт по процедурам регистрации и оформления документов."
    },
    {
      name: "Дмитрий Волков",
      position: "IT-директор",
      experience: "8 лет в разработке правовых систем",
      education: "МФТИ, информационные технологии",
      photo: "👨‍💻",
      description: "Отвечает за техническую платформу и цифровые решения компании."
    }
  ]

  const achievements = [
    {
      number: "1000+",
      title: "Защищенных произведений",
      description: "Успешно зарегистрированных авторских прав"
    },
    {
      number: "500+",
      title: "Довольных клиентов",
      description: "Авторов, которые доверили нам свои права"
    },
    {
      number: "95%",
      title: "Успешных дел",
      description: "Положительных решений в судебных спорах"
    },
    {
      number: "10",
      title: "Лет на рынке",
      description: "Опыта работы в сфере авторского права"
    }
  ]

  const values = [
    {
      icon: "🎯",
      title: "Профессионализм",
      description: "Высокий уровень экспертизы и качества услуг"
    },
    {
      icon: "🤝",
      title: "Надежность",
      description: "Гарантируем результат и соблюдение сроков"
    },
    {
      icon: "🔒",
      title: "Конфиденциальность",
      description: "Полная защита данных и коммерческой тайны"
    },
    {
      icon: "💡",
      title: "Инновации",
      description: "Современные технологии и подходы к работе"
    }
  ]

  const timeline = [
    {
      year: "2013",
      title: "Основание компании",
      description: "Создание первой платформы для регистрации авторских прав"
    },
    {
      year: "2015",
      title: "Расширение услуг",
      description: "Добавление услуг по защите интеллектуальной собственности"
    },
    {
      year: "2017",
      title: "Региональное развитие",
      description: "Открытие офисов в Санкт-Петербурге и Екатеринбурге"
    },
    {
      year: "2019",
      title: "Цифровая трансформация",
      description: "Запуск онлайн-платформы для работы с клиентами"
    },
    {
      year: "2021",
      title: "Международное признание",
      description: "Получение сертификации ISO и партнерство с ВОИС"
    },
    {
      year: "2023",
      title: "Лидерство на рынке",
      description: "Признание лучшей компанией в сфере авторского права"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Заголовок страницы */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            О компании
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in-up">
            Мы — ведущая компания в сфере защиты авторских прав и интеллектуальной собственности. 
            Более 10 лет помогаем авторам защищать свои творческие произведения и получать справедливое вознаграждение за свой труд.
          </p>
        </div>

        {/* Миссия и видение */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-gray-900">Наша миссия</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              Обеспечить надежную защиту интеллектуальной собственности для каждого автора, 
              создавая справедливую и прозрачную экосистему для творческих людей. 
              Мы стремимся сделать процесс защиты авторских прав простым, доступным и эффективным.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold text-gray-900">Наше видение</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              Стать глобальным лидером в области защиты авторских прав, 
              используя передовые технологии и инновационные подходы. 
              Мы видим будущее, где каждый автор может легко защитить свои права и получить справедливое вознаграждение.
            </p>
          </div>
        </div>

        {/* Достижения */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Наши достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Наши ценности */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* История компании */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">История компании</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    {event.year}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-lg">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Команда */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4">{member.photo}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p><strong>Опыт:</strong> {member.experience}</p>
                  <p><strong>Образование:</strong> {member.education}</p>
                </div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Сертификаты и партнеры */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Сертификаты и партнеры</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 27001</h3>
                <p className="text-gray-600">Сертификат информационной безопасности</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Партнер ВОИС</h3>
                <p className="text-gray-600">Всемирная организация интеллектуальной собственности</p>
              </div>
              <div>
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Рейтинг А+</h3>
                <p className="text-gray-600">Высший рейтинг надежности от РБК</p>
              </div>
            </div>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Присоединяйтесь к нам!</h3>
          <p className="text-xl mb-8 opacity-90">
            Станьте частью сообщества авторов, которые доверяют нам защиту своих прав
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Связаться с нами
            </button>
            <button 
              onClick={() => setCurrentPage('services')}
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Наши услуги
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

