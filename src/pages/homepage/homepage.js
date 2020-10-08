import React from 'react'
import './homepage.styles.css'
//importing components
import Footer from '../../components/footer/footer'
import Directory from '../../components/directory/directory'

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
      <Footer />
    </div>
  )
}

export default HomePage
