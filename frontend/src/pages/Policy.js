import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
    return (
        <Layout title={"Privacy Policy"}>
            <div className="row contactus p-4">
                <div className="col-md-6 ">
                    <img
                        src="/images/contact.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                <h1 className='bg-dark p-2 text-white text-center'>PRIVACY POLICY</h1>
                    <p>add privacy policy</p>
                    <p>add privacy policy</p>
                    <p>add privacy policy</p>
                    <p>add privacy policy</p>
                    <p>add privacy policy</p>
                    <p>add privacy policy</p>
                    <p>add privacy policy</p>
                </div>
            </div>
        </Layout>
    )
}
export default Policy