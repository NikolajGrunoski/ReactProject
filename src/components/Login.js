import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="box-container"/>
                <form action="" class="form-box"/>
                    <p class="input-container"/>
                        <label for="" class="text-field-input">E-mail</label>
                        <input type="text" class="text-field"/>
                    <p/>

                    <p class="input-container"/>
                        <label for="" class="text-field-input">Password</label>
                        <input type="password" class="text-field"/>
                    <p/>

                    <button class="primary-button long">Sing in</button>

                <form/>
            <div/>




            <div class="additional-info"/>
                <p>
                    Or if you don't have and account,
                    <a href="#">Register</a>
                </p>
            <div/>
        </div>
    )
    

}

export default Login