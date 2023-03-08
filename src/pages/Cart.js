import { getNodeText } from '@testing-library/react';
import React ,  { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import { Link } from "react-router-dom";

const Cart = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {

        dispatch(remove(productId));
        
    };
    // products.reduce((acc, curr) => acc + curr.price, 0)
    useEffect(() => {
        setTotalAmount( products.reduce((acc, curr) => acc + curr.price, 0));
      }, [products]);

    return (
        <>
        {products.length > 0 ? (
          <>
        <div>
            {totalAmount}
            <h3>Cart</h3>
            <div className="cartWrapper">
                
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.img} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.name)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
        </>
      ) : (
        <>
          <div className="">
            <h1 className="">
              Your cart is empty!
            </h1>
            <Link to={"/"}>
              <button className="">
                SHOP NOW
              </button>
            </Link>
          </div>
        </>
      )}
    </>
    );
};

export default Cart;
