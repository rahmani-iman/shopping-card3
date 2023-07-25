import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import styles from "./Store.module.css";

// Components
import Product from './shared/Product';
import Loader from './shared/Loader';

// Redux
import { fetchProducts } from '../redux/products/productsAction';

/*// Context
import { ProductsContext } from '../context/ProductContextProvider';*/

const Store = () => {

    /*const products = useContext(ProductsContext)*/
    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productState);

    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts());
        // eslint-disable-next-line
    }, []);

    return (
        <div className={styles.container} >
            {/*
                products.map(product => <Product 
                        key={product.id} 
                        productData = {product}
                    />)
            */}
            {
                productsState.loading ? <Loader /> :
                productsState.error ? <p>Something went wrong</p> :
                productsState.products.map((product) => <Product key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;