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

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'catalog':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CatalogPage setCurrentPage={setCurrentPage} />
          </div>
        )
      case 'product':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductPage setCurrentPage={setCurrentPage} />
          </div>
        )
      default:
        return (
          <>
            {/* Hero секция - полная ширина с центрированным контентом */}
            <div className="w-full">
              <div className="max-w-6xl mx-auto">
                <Hero />
              </div>
            </div>
            
            {/* Основной контент - центрированный контейнер */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Основной контент - 70% ширины */}
                <main className="lg:col-span-2 space-y-12">
                  <div className="max-w-full mx-auto">
                    <AboutSection />
                  </div>
                  <div className="max-w-full mx-auto">
                    <AdBanner />
                  </div>
                  <div className="max-w-full mx-auto">
                    <NewsSection />
                  </div>
                </main>
                
                {/* Sidebar - 30% ширины */}
                <aside className="lg:col-span-1">
                  <div className="max-w-sm mx-auto lg:max-w-none">
                    <Sidebar />
                  </div>
                </aside>
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - центрированный */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto">
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
      
      {renderPage()}
      
      {/* Footer - центрированный */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App

