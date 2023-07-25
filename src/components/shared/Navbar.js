import React, { /*useContext*/ } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Style
import styles from "./Navbar.module.css";

// Icons
import shopIcon from "../../assets/icons/shop.svg";

/*// Context
import { CartContext } from '../../context/CartContextProvider';*/

const Navbar = () => {

    /*const {state} = useContext(CartContext);*/
    const state = useSelector(state => state.cartState);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} alt='shop_icon'/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;