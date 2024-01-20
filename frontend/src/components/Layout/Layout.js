import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'
const Layout=({children,title,description,keywords,author,})=>{
    return(
        <div className="Layout">
            <Helmet>
                <meta charSet='utf-8'/>
                    <meta name='description' content={description}/>
                    <meta name='keywords' content={keywords}/>
                    <meta name='author' content={author}/>
                    <title>{title}</title>
            </Helmet>
            <Header/>
            <main style ={{minHeight:'82.9vh'}}>{children}</main>
            <Footer/>
        </div>
    );
};
Layout.defaultProps={
    title:'Venditor App',
    description:'Mern Stack Project',
    keywords:'mern,react,node,mongodb',
    author:'Jaimin,Shrey'
}
export default Layout
// 
// import React,{useEffect,Fragment,memo} from 'react'
// import { Outlet } from 'react-router-dom'
// import { Container } from 'react-bootstrap'
// import Header from './Header'
// import Footer from './Footer'
// const Layout = memo(({children}) => {
//   useEffect(() => {
//     //scroll up pages go
//  window.scrollTo({top: 0, behavior: 'smooth'});
// })
//   return (
//     <Fragment>
//         <div className="wrapper">
//           <div id="Layout" className="Layout">
//         <Header />
//             <Container fluid>
//               {/* <h1>DefaultLayout.</h1> */}
//               <main style ={{minHeight:'82.9vh'}}>{children}</main>
//               <Outlet></Outlet>
//             </Container>
//             <Footer />
//           </div>
//         </div>
//     </Fragment>
//   )
// })

// Layout.displayName = "Layout"
// export default Layout