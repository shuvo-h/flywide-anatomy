import React from 'react';
import Header from "../common/Header"

const Layout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <header>
                <h3>Nav bar</h3>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h3>Footer</h3>
            </footer>
        </div>
    );
};

export default Layout;