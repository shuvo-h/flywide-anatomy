import React from 'react';
import Header from "../common/Header"
import Footer from './Footer';
import Navber from './Navber';
// import layoutStyle from './layoutStyle.css'

const Layout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <header>
                <Navber />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;