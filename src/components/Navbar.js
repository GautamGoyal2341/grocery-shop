import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">GROCERIES</span>
            <div>
          
                    <AccountCircleIcon />
     
                <Link className="navLink" to="/">
                    <HomeIcon/>
                </Link>
                <Link className="navLink" to="/cart">
                    <ShoppingCartIcon/>
                </Link>
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
       
    );
};

export default Navbar;
