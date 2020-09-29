import React, { Component } from 'react';
import { connect } from "react-redux";
import { incrementCartCounter } from './store/actions/index';

import CartPageItems from './cartPageItems';

class Cart extends Component {
    state = { 
        

     }
    render() { 
        return ( 
            <div>
                <h2>Cart Page </h2>
                <h3>There are {this.props.products.length} items in your cart</h3>

                <div className="addedCartItems">
                    {this.props.products.map(product => 
                    <CartPageItems key={product.product.id} info={product}></CartPageItems> 
                    )}

                </div>
                <i onClick={this.removeProduct} className = "fa fa-trash-o remove " aria-hidden="true"></i>
            </div>
         );
    }
    removeProduct = () => {
        console.log("remove product" +  this.props.info.product.title);
       
    };
}
 
const mapStateToProps = (state) => {
    return {
        products: state.cart
    };
};

export default connect(mapStateToProps, {incrementCartCounter } ) (Cart);
