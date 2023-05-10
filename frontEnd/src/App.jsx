
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ArticlesList from './pages/articles-list'
import Articles from './pages/articles'
import AboutPage from './pages/about'
import HomePage from './pages/home'
import Page404 from './pages/404-page'
import Navebar from './components/navebar'
import './App.css'

function App() {
  

  return (
      <BrowserRouter>
    <>
        <Navebar />
        <Routes>
          <Route path='*' element={<Page404 />} />
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='articles' element={<ArticlesList />} />
          <Route path='articles/:articlesId' element={<Articles />} />
        </Routes>
    </>
      </BrowserRouter>
  )
}

export default App
