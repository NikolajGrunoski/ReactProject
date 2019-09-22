import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar-container"/>
            <nav className="navbar"/>
                <div className="buttons"/>
                    <a href="#"><button className="ghost-button">PRODUCTS</button></a>
                    <a href="#"><button className="solid-button">EXPENSES</button></a>
                <div/>

                <div className="profile-picture"/>
                    <img src="../../asets/images/profile-picture.jpg" alt="#" className="picture"/>
                    <a href="#"><h1 className="username">Nikolaj Grunoski</h1></a>
                <div/>
            <nav/>
        <div/>
    )
}

export default Navbar