import React from 'react'
//import { propTypes } from 'react-bootstrap/esm/Image'
import Header from './Header'
import Footer from './Footer'

const Layout=({children})=>{
    return(
        <div className="layout">
            <Header/>
            <main style ={{minHeight:'82vh'}}>{children}</main>
            <Footer/>
        </div>
    )
}
export default Layout