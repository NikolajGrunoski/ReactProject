import React from 'react'
import ProuctsTbodyData from './ProductsTbodyData'

const ProductsTable = () => {
    return (
        <div className="table-container">
            <table style="width:90%"/>
                <tr className="header-line">
                    <th>Product Name</th>
                    <th>Product Type</th>
                    <th>Product Description</th>
                    <th>Purchase Date</th>
                    <th>Product Price</th>
                </tr>

                <tr className="row-lines">
                    <td>Coca Cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td><button className="edit-del-btn"><i className="far fa-edit"></i></button><button className="edit-del-btn">
                        <i className="far fa-trash-alt"></i></button>
                    </td>
                </tr>
                <ProuctsTbodyData/>
            <table/>
        </div>
    )
}

export default ProductsTable