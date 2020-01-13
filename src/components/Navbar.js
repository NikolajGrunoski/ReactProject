import React from 'react'

const Navbar = () => {
    return (

        <div id="navbar">
            <header>
                <div className="buttons">
                    <a href='/products'><button className="ghost-button">PRODUCTS</button> </a>
                    <a href='/expences'> <button className="solid-button">EXPENSES</button> </a>
                </div>

                <div className="profile-picture">
                    <img src="../../asets/images/profile-picture.jpg" alt="" className="picture" />
                    <h1 className="username">Nikolaj Grunoski</h1>
                </div>
            </header>
        </div>
    )
}

export default Navbar