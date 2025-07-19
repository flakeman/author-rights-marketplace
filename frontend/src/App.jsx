import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import AdBanner from './components/AdBanner'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
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
          <main>
            <Hero />
            <AboutSection />
            <AdBanner />
            <NewsSection />
          </main>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App

