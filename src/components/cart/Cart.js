import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import CartItem from './CartItem';

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Calculate the total price
    const totalPrice = Object.keys(cartItems).reduce((total, productId) => {
        const item = cartItems[productId];
        return total + item.productDetails.price * item.quantity;
    }, 0);

    return (
        <div className="container mt-4">
            <h1>Shopping Cart</h1>
            <div className="cart">
                {Object.keys(cartItems).length === 0 && (
                    <p>Your cart is empty.</p>
                )}
                {Object.keys(cartItems).map((productId) => (
                    <CartItem
                        key={productId}
                        item={cartItems[productId]}
                        productId={productId}
                    />
                ))}
                {Object.keys(cartItems).length !== 0 && (
                    <div className="row">
                        <div className="col-md-12 text-end">
                            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
