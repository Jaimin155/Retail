import React from 'react'
import { Link } from 'react-router-dom'
const Footer=()=>{
    return(
        <div className="footer">
            <h5 className='text-center'>
            &copy; 2023 Venditor. All rights reserved.
            </h5>
            <p className='text-center mt-1'>
                <Link to="/about">About Us</Link>
                |
                <Link to="/contactus">Contact Us</Link>
                |
                <Link to="/policy">Privacy Policy</Link>
            </p>

        </div>
    )
}
export default Footer