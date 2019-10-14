import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="box-container"/>
                <form action="" className="form-box"/>
                    <p className="input-container"/>
                        <label for="" className="text-field-input">E-mail</label>
                        <input type="text" className="text-field"/>
                    <p/>

                    <p className="input-container"/>
                        <label for="" className="text-field-input">Password</label>
                        <input type="password" className="text-field"/>
                    <p/>

                    <button className="primary-button long">Sing in</button>

                <form/>
            <div/>




            <div className="additional-info"/>
                <p>
                    Or if you don't have and account,
                    <a href="#">Register</a>
                </p>
            <div/>
        </div>
    )
    

}

export default Login