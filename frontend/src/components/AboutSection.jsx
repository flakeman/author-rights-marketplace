import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Shield, Users, FileText, TrendingUp, Star, Quote, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const AboutSection = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const features = [
    {
      icon: Shield,
      title: "Управление авторскими правами",
      description: "Мы обеспечиваем полный контроль над вашими правами и обеспечиваем их защиту на всех этапах творческого процесса."
    },
    {
      icon: FileText,
      title: "Создание договоров",
      description: "Автоматизированная система создания юридически корректных договоров с учетом всех нюансов авторского права."
    },
    {
      icon: Users,
      title: "Управление проектами",
      description: "Комплексное управление творческими проектами от идеи до коммерциализации с полным контролем прав."
    },
    {
      icon: TrendingUp,
      title: "Маркетплейс",
      description: "Платформа позволяет авторам продавать и лицензировать свои произведения, а инвесторам — находить перспективные проекты для вложений."
    }
  ]

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Композитор",
      content: "Благодаря этой платформе я смогла защитить свои музыкальные произведения и найти новых клиентов. Очень удобно и профессионально!",
      rating: 5,
      avatar: "🎵"
    },
    {
      name: "Михаил Иванов",
      role: "Писатель",
      content: "Отличная система для управления авторскими правами. Все процессы автоматизированы, а поддержка работает круглосуточно.",
      rating: 5,
      avatar: "📚"
    },
    {
      name: "Елена Смирнова",
      role: "Художник",
      content: "Платформа помогла мне продать несколько картин и заключить выгодные лицензионные соглашения. Рекомендую всем творческим людям!",
      rating: 5,
      avatar: "🎨"
    }
  ]

  const faqs = [
    {
      question: "Как защитить свои авторские права?",
      answer: "Наша платформа автоматически регистрирует ваши произведения и создает цифровые сертификаты, которые имеют юридическую силу. Мы также предоставляем полную документацию для защиты в суде."
    },
    {
      question: "Сколько стоят услуги платформы?",
      answer: "Регистрация бесплатна. Мы берем небольшую комиссию только с успешных продаж и лицензирования. Базовые функции защиты авторских прав доступны бесплатно."
    },
    {
      question: "Какие типы произведений можно защитить?",
      answer: "Мы работаем с любыми видами интеллектуальной собственности: музыка, литература, изобразительное искусство, фотография, программное обеспечение, дизайн и многое другое."
    },
    {
      question: "Как быстро происходит регистрация прав?",
      answer: "Цифровая регистрация происходит мгновенно. Полная юридическая регистрация занимает от 1 до 3 рабочих дней в зависимости от типа произведения."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Центрированный заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создаем будущее управления авторскими правами
          </p>
        </div>

        {/* Центрированный контент */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-32 flex items-center justify-center">
                    <Shield className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg h-48 flex items-center justify-center">
                    <Users className="h-16 w-16 text-green-600" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg h-40 flex items-center justify-center">
                    <FileText className="h-14 w-14 text-purple-600" />
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg h-32 flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Text */}
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-lg text-gray-600 leading-relaxed">
                Author Rights Management — это инновационная система, созданная для авторов, 
                правообладателей и инвесторов, которая обеспечивает эффективное управление 
                авторскими правами и интеллектуальной собственностью.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Наша миссия — упростить процесс управления авторскими правами, сделать его 
                прозрачным и доступным для всех участников творческого процесса.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Компания Author Rights Management стремится к созданию справедливой и 
                эффективной экосистемы для управления интеллектуальной собственностью, 
                где каждый автор может максимально реализовать потенциал своих произведений.
              </p>
            </div>
          </div>
        </div>

        {/* Центрированная сетка функций */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Отзывы клиентов */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h3>
            <p className="text-lg text-gray-600">Узнайте, что говорят о нас авторы и правообладатели</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative">
                <Quote className="h-8 w-8 text-blue-200 absolute top-4 right-4" />
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ секция */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h3>
            <p className="text-lg text-gray-600">Ответы на самые популярные вопросы о нашей платформе</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

