import React from 'react'

const Alert = () => {
    return (
        <div id="alert">
            <div class="overlay"></div>
            <div class="alert-message">
                <h1 class="tittle">Delete Product</h1>
                <p>You are about to delete this product. Are you sure you wish to continue?</p>

                <div class="buttons">
                    <button class="cancel-button">CANCEL</button>
                    <button class="delete-button">DELETE</button>
                </div>

            </div>
        </div>
    )
}

export default Alert