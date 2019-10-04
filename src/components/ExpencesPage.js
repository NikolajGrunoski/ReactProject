import React from 'react'
import Navbar from './Navbar'
import Expences from './Expences'

const ExpencesPage = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Expences/>
            <div className="footer">
                <h1>Total spent: 1205</h1>
            </div>
        </React.Fragment>
    )
}

export default ExpencesPage