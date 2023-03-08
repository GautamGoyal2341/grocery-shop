import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { STATUSES } from '../store/productSlice';
import GradeIcon from '@mui/icons-material/Grade';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <>  
         <div className="searchInput_Container">
         <div className="search-child" />
        <input className="search1" id="searchInput" type="text" placeholder="Search" onChange={(event) => {
          setSearchTerm(event.target.value);
          
        }} />
      </div>

        <div className="productsWrapper">
           
      
          {
              products
                .filter((val) => {
                  if(searchTerm == ""){
                    return val;
                  }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                  }
                })
                .map((product) => {
                  return(
                  
                <div className="card" key={product.id}>
                    <img src={product.img} alt="" />
                    <h4>{product.name}</h4>
                    <p>{product.description}</p> 
                    {/* <h4>{product.title}</h4> */}
                    <div className='ff'>
                    <h5>{product.price}</h5>
                    <p><GradeIcon/>{product.rating}</p>
                    </div>
                    <div className='ff'>
                    

                    <button onClick={() => handleAdd(product)} className="btn">
                    <AddShoppingCartOutlinedIcon/>
                    </button>
                    </div>
                 
                </div>
                    
                  )
                })
            }
        </div>
        
      </>


    );
};

export default Products;
