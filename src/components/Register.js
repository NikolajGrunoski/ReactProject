import React from 'react'

const Register = () => {
    return (
        <div id="register">
                <div className="box-container">
                    <form action="" className="form-box">
                        <p className="input-container">
                            <label for="" className="text-field-input">First Name</label>
                            <input type="text" className="text-field"/>
                        </p>

                        <p className="input-container">
                            <label for="" className="text-field-input">Last Name</label>
                            <input type="text" className="text-field"/>
                        </p>

                        <p className="input-container">
                            <label for="" className="text-field-input">E-mail</label>
                            <input type="text" className="text-field"/>
                        </p>

                        <p className="input-container">
                            <label for="" className="text-field-input">Date of Birth</label>
                            <input type="text" className="text-field"/>
                        </p>

                        <p className="input-container">
                            <label for="" className="text-field-input">Telephone</label>
                            <input type="number" className="text-field"/>
                        </p>

                        <p className="input-container">
                            <label for="" className="text-field-input">Country</label>
                            <input type="text" className="text-field"/>
                        </p>

                        <p className="input-container">
                            <label for="" className="text-field-input">Password</label>
                            <input type="password" className="text-field"/>
                        </p>

                        <button className="primary-button long">Sing in</button>

                    </form>
                </div>

                <div className="additional-info">
                    <p>
                        Or if you already have and account,
                        <a href="#">Sing in</a>
                    </p>
                </div>
        </div>
    )
}

export default Register