import React from 'react'

const Register = () => {
    return (
        <div id="register-container">
        <div id="register"/>
            <div class="box-container"/>
                <form action="" class="form-box"/>
                    <p class="input-container"/>
                        <label for="" class="text-field-input">First Name</label>
                        <input type="text" class="text-field"/>
                    <p/>

                    <p class="input-container"/>
                        <label for="" class="text-field-input">Last Name</label>
                        <input type="text" class="text-field"/>
                    <p/>

                    <p class="input-container"/>
                        <label for="" class="text-field-input">E-mail</label>
                        <input type="text" class="text-field"/>
                    <p/>

                    <p class="input-container"/>
                        <label for="" class="text-field-input">Date of Birth</label>
                        <input type="text" class="text-field"/>
                    <p/>

                    <p class="input-container"/>
                        <label for="" class="text-field-input">Telephone</label>
                        <input type="number" class="text-field"/>
                    <p/>

                    <p class="input-container"/>
                        <label for="" class="text-field-input">Country</label>
                        <input type="text" class="text-field"/>
                    <p/>

                    <p class="input-container"/>
                        <label for="" class="text-field-input">Password</label>
                        <input type="password" class="text-field"/>
                    <p/>

                    <button class="primary-button long">Sing in</button>

                <form/>
            <div/>

            <div class="additional-info">
                <p>
                    Or if you already have and account,
                    <a href="#">Sing in</a>
                </p>
            </div>
        <div/>
        </div>
    )
}