import React from 'react'
import { Form } from 'react-bootstrap';

function Page() {
    return (
        <div>
            <link rel="copy" type="image/png" href="https://www.shopify.in/#:~:text=emails%C2%A0from%C2%A0Shopify.-,Bring,-your%20business%20online" />

            <div>
                <h2>
                    Anyone, anywhere can start an ecommerce website
                </h2>
                <form>
                    <input type="text" id="formforemail" name="email" placeholder="Enter your email address" />
                </form>
                <btn className="greenbutton">Try for free</btn>
            </div>
        </div>
    )
}
export default Page;