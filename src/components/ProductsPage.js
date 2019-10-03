import React from 'react'
import Navbar from './Navbar'
import Products from './Products'

const ProductsPage = () => {
    return(
        <React.Fragment>
            <div className="general-products-container">
                <Navbar/>
                <Products/>
            </div>
            <a href="#"><button className="fixed-button">NEW PRODUCT</button></a>
        </React.Fragment>
    )
}

export default ProductsPage