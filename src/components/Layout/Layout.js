import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import Header from './Header'
import Footer from './Footer'

const Layout=({children})=>{
    return(
        <div>
            <Header/>
            <main style ={{minHeight:'72vh'}}>{children}</main>
            <Footer/>
        </div>
    )
}
export default Layout