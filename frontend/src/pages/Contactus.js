import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiMailSend,BiPhoneCall,BiSupport} from 'react-icons/bi'
const Contactus=()=>{
    return(
        <Layout title={"Contact Us"}>
            <div className='row contactus p-4'>
                <div className='col-md-6'>
                    <img src='/images/contact.jpeg' alt='contact' style={{width:"100%"}}/>
                </div>
                <div className='col-md-4'>
                    <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
                    <p className='text-justify'>We value your feedback and are here to assist you 24x7. Whether you have a question, suggestion, or need support, feel free to reach out to us. Our dedicated team is committed to providing timely and helpful responses.</p>
                    <p className='mt-5'>
                        <BiMailSend/>:www.help@Venditor.com
                    </p>
                    <p className='mt-3'>
                        <BiPhoneCall/>:012-3456789
                    </p>
                    <p className='mt-3'>
                        <BiSupport/>:1800-0000-0000 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    )
}
export default Contactus