import axios from "axios";

const fetchProductRequest = () => {
    return {
        type : "FETCH_PRODUCTS_REQUEST"
    }
}
const fetchProductSuccess = (products) => {
    return {
        type : "FETCH_PRODUCTS_SUCCESS",
        payload : products
    }
}
const fetchProductFailure = (error) => {
    return {
        type : "FETCH_PRODUCTS_FAILURE",
        payload : error
    }
}

const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest());
        axios.get("https://fakestoreapi.com/products")
            .then ((res) => {
               const products = res.data;
               dispatch(fetchProductSuccess(products))})
            .catch ((error) => {
                const errorMsg = error.message;
                dispatch(fetchProductFailure(errorMsg))
            })
    }
}

export {fetchProducts};