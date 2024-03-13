import React from 'react';
import background from '../../public/2303.w018.n002.1741A.p30.1741.jpg'
import './Layout.css'

function Layout({ children }) {
    return (
        <div className="layout">
            <header className='header'>
                <a href="/" className='header-logo'><h1>SBD</h1></a>

                <ul className='header-link-list'>
                    <li className='header-link'>
                        <a href="">Goods</a>
                    </li>
                    <li className='header-link'>
                        <a href="">Services</a>
                    </li>
                    <li className='header-link'>
                        <a href="">Dining & Food</a>
                    </li>
                    <li className='header-link'>
                        <a href="">Health & Beauty</a>
                    </li>
                    <li className='header-link'>
                        <a href="/register">Register Your Business</a>
                    </li>
                </ul>
            </header>
            <main className='main' style={{ backgroundImage: `url(${background})` }}>{children}</main>
            <footer className='footer'>
                kcdk
            </footer>
        </div>
    );
}

export default Layout;