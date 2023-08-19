import { useState } from 'react'
import './App.css'
import Navegacion from './Components/Navegacion'
import Overview from './pages/Overview'
import Content from './pages/Content'
import Create from './pages/Create'
import { DataProvider } from './context/DataContext'
import Footer from './Components/Footer'

function App() {

  const [overview, setOverview] = useState(true)
  const [content, setContent] = useState(false)
  const [create, setCreate] = useState(false)


  return (
    <>
      <DataProvider>
        <div className="navegacion">
          <div className="logo"><h1>DataSports</h1></div>
          <div className="navbar">
            <Navegacion setOverview={setOverview} setContent={setContent} setCreate={setCreate} />
          </div>
        </div>
        {
          overview ? <Overview /> : (content ? <Content /> : <Create />)
        }
      <Footer/>
      </DataProvider>
    </>
  )
}

export default App
