import React from 'react'

const Navbar = () => {
    return (
        
        <div id="navbar">
            <header>
                <div className="buttons">
                    <button className="ghost-button">PRODUCTS</button>
                    <button className="solid-button">EXPENSES</button>
                </div>

                <div className="profile-picture">
                    <img src="../../asets/images/profile-picture.jpg" alt="" className="picture"/>
                    <h1 className="username">Nikolaj Grunoski</h1>
                </div>
            </header>
        </div>
    )
}

export default Navbar