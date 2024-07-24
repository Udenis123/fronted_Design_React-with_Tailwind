import React from 'react'
import ChatRoom from './component/ChatRoom'
import NavBar from './component/NavBar'
import WellcomePage from './component/WellcomePage'
import Analytics from './component/Analytics'
import NewsLetter from './component/NewsLetter'
import Cards from './component/Cards'
import Footer from './component/Footer'

function App() {
  return (
    <div>
    <NavBar/>
    <WellcomePage/>
    <Analytics/>
    <NewsLetter/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App
