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


  return (
    <>
      <DataProvider>
        <div className="navegacion">
          <div className="logo"><a href="#"><h1 onClick={()=> setOverview(true) } >DN-Sport</h1></a></div>
          <div className="navbar">
            <Navegacion setOverview={setOverview} setContent={setContent} setCreate={setCreate} />
          </div>
        </div>
        {
          overview ? <Overview /> : (content ? <Content /> : <Create/>)
        }
        <Footer />
      </DataProvider>
    </>
  )
}

export default App
