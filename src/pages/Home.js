import React from 'react';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <h2 className="heading"></h2>
            <section>
                <h1 className='con'>Trending Items</h1>
                <Products />
            </section>
        </div>
    );
};

export default Home;
