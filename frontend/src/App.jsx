import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import AdBanner from './components/AdBanner'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CatalogPage from './components/CatalogPage'
import ProductPage from './components/ProductPage'
import ServicesPage from './components/ServicesPage'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'catalog':
        return (
          <div className="w-full min-h-screen flex items-center justify-center py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <CatalogPage setCurrentPage={setCurrentPage} />
            </div>
          </div>
        )
      case 'product':
        return (
          <div className="w-full min-h-screen flex items-center justify-center py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <ProductPage setCurrentPage={setCurrentPage} />
            </div>
          </div>
        )
      case 'services':
        return (
          <div className="w-full min-h-screen flex items-center justify-center py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <ServicesPage setCurrentPage={setCurrentPage} />
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className="w-full min-h-screen flex items-center justify-center py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <ContactPage setCurrentPage={setCurrentPage} />
            </div>
          </div>
        )
      case 'about':
        return (
          <div className="w-full min-h-screen flex items-center justify-center py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <AboutPage setCurrentPage={setCurrentPage} />
            </div>
          </div>
        )
      default:
        return (
          <div className="w-full">
            {/* Hero секция - полная ширина с центрированным контентом */}
            <section className="w-full flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <Hero />
              </div>
            </section>
            
            {/* Основной контент - центрированный контейнер */}
            <section className="w-full py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                  {/* Основной контент - 75% ширины */}
                  <main className="lg:col-span-3 space-y-16">
                    <div className="flex justify-center">
                      <div className="w-full max-w-4xl">
                        <AboutSection />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-full max-w-4xl">
                        <AdBanner />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-full max-w-4xl">
                        <NewsSection />
                      </div>
                    </div>
                  </main>
                  
                  {/* Sidebar - 25% ширины */}
                  <aside className="lg:col-span-1">
                    <div className="sticky top-8">
                      <Sidebar />
                    </div>
                  </aside>
                </div>
              </div>
            </section>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - фиксированный и центрированный */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </header>
      
      {/* Отступ для фиксированного header */}
      <div className="pt-20">
        {renderPage()}
      </div>
      
      {/* Footer - центрированный */}
      <footer className="w-full bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App

