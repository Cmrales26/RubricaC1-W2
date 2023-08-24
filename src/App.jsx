import { useState } from 'react'
import './App.css'
import Navegacion from './Components/Navegacion'
import Footer from './Components/Footer'
import Overview from './pages/Overview'
import Content from './pages/Content'
import Create from './pages/Create'
import { DataProvider } from './context/DataContext'

function App() {

  const [overview, setOverview] = useState(true)
  const [content, setContent] = useState(false)
  const [create, setCreate] = useState(false)

  const volveroverview = () =>{
    setOverview(true)
    setContent(false)
    setCreate(false)
  }

  return (
    <>
      <DataProvider>
        <div className="navegacion">
          <div className="logo" onClick={volveroverview}>
            <img className='logoweb' src="/public/Logotipo.svg" alt="" />
            <img className='logoMobile' src="/public/Imagotipo.svg" alt="" />
          </div>
          <div className="navbar">
            <Navegacion setOverview={setOverview} setContent={setContent} setCreate={setCreate} overview = {overview} content = {content} create = {create} />
          </div>
        </div>
        {
          overview ? <Overview /> : (content ? <Content /> : <Create setOverview={setOverview} setContent={setContent} setCreate={setCreate} />)
        }
        <Footer />
      </DataProvider>
    </>
  )
}

export default App
