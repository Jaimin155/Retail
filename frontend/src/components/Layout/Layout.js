import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div className="Layout">
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta name='author' content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: '82.9vh' }}>
                <Toaster />
                {children}</main>
            <Footer />
        </div>
    );
};
Layout.defaultProps = {
    title: 'Venditor App',
    description: 'Mern Stack Project',
    keywords: 'mern,react,node,mongodb',
    author: 'Jaimin,Shrey'
}
export default Layout