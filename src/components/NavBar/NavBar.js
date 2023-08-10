import logo from '../../images/logoOwl.png'
import './NavBar.css'
import React from 'react';

function NavBar() {

    return (
        <div>
            <input type='checkbox' id='nav-checkbox' className='nav-checkbox' />
            <label for='nav-checkbox' className='toogle'>
                <img className='menu' src='menu.png' alt='menu' />
                <img className='close' src='close.png' alt='close' />
            </label>
            <ul className='menu'>
                <li>
                    <a href='/'>
                        <img className='logo' src={logo} alt='logo'></img>
                        <h1 className='name'>OwlNight</h1>
                    </a>
                </li>
                <li><a href='/'>Home</a></li>
                <li><a href='/login&register'>Login</a></li>
                <li><a href='/locals'>Locales</a></li>
            </ul>
        </div>
    );
}

export default NavBar;