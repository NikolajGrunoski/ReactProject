import React from 'react'
import ProductsPage from './ProductsPage'

const Login = () => {
    return (
        <div id='login'>
            <div className="box-container">
                <form action="" className="form-box">
                    <p className="input-container">
                        <label htmlFor="" className="text-field-input">E-mail</label>
                        <input type="text" className="text-field"/>
                    </p>

                    <p className="input-container">
                        <label htmlFor="" className="text-field-input">Password</label>
                        <input type="password" className="text-field"/>
                    </p>

                    <a href='/products'><button className="primary-button long">Sing in</button></a>

                </form>
            </div>




            <div className="additional-info">
                <p>
                    Or if you don't have and account,
                    <a href="/register"> Register</a>
                </p>
            </div>
        </div>
    )
    

}

export default Login