import './App.css'
import React from  'react'

import Logo from '../components/templete/Logo'
import Nav from '../components/templete/Nav'
import Main from '../components/templete/Main'
import Footer from '../components/templete/Footer'

export default props =>
    <div className='app'>
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>