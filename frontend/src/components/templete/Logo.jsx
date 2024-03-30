import './Logo.css'
import React from 'react'
import logo from '../assets/imagens/lib.png'

export default props =>
    <aside className='logo'>
        <a href="/" className="logo">
        <img src={logo} alt="Logo Active Code" />
        </a>
    </aside>