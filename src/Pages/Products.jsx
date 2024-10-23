import React from 'react'
import Product_Item from '../components/Product_Item'

function Products () {
    return(
        <div>
            <h1>This is my Products Page</h1>
            <Product_Item p_name='Cookies' p_price='Rs.99' p_qty='5' p_desc='chocolate chip'/>
            <hr></hr>
            <Product_Item p_name='Pastery' p_price='Rs.199' p_qty='1' p_desc='Lotus Biscoff'/>
            <hr></hr>
            <Product_Item p_name='Iced Coffee' p_price='Rs.149' p_qty='1' p_desc='Dalgona Iced Coffee'/>
        </div>
    )
}
export default Products