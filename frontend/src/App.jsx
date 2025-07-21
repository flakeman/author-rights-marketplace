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
        return <CatalogPage setCurrentPage={setCurrentPage} />
      case 'product':
        return <ProductPage setCurrentPage={setCurrentPage} />
      default:
        return (
          <>
            <Hero />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Основной контент - 70% ширины */}
                <main className="lg:col-span-2 space-y-12">
                  <AboutSection />
                  <AdBanner />
                  <NewsSection />
                </main>
                
                {/* Sidebar - 30% ширины */}
                <Sidebar />
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App

