import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import React from  'react'

import Logo from '../components/templete/Logo'
import Nav from '../components/templete/Nav'
import Home from '../components/home/Home'
import Footer from '../components/templete/Footer'

export default props =>
    <div className='app'>
        <Logo />
        <Home/>
        <Nav />
        <Footer />
    </div>