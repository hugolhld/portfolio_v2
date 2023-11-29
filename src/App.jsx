import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './screens/Home'
import Project from './screens/Project'
import Skills from './screens/Skills'

function App() {
  return (
    <>
      <Header />
      <main className='bg-slate-600'>
        <Home />
        <Project />
        <Skills />
      </main>
      <Footer />
    </>
  )
}

export default App
