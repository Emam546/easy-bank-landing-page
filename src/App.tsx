import './App.scss'
import Home from './home'
import NavBar from './components/navbar'
import WhyChoose from './whychoose'
import LastArticle from './lastArticles'
import Footer from './footer'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Home />
        <WhyChoose />
        <LastArticle />
      </main>
      <Footer />
    </>
  )
}

export default App
