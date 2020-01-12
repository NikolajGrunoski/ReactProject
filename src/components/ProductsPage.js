import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class ProductsPage extends React.Component {

    goToNewProduct ()  {
        this.props.navigation.navigate('NewProduct');
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="general-products-container">
                    <Navbar />
                    <Products />
                </div>
                <a href="/newproduct"><button className="fixed-button" onClick={this.goToNewProduct}>NEW PRODUCT</button></a>
            </React.Fragment>
        )
    }
}

export default ProductsPage