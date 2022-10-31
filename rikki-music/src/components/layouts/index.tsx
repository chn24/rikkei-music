import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

interface Props  {
    children : JSX.Element
}

const Layout = ({children} : Props) => {
    return (
        <div id='layout'>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;