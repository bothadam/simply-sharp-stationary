import React, { useEffect, useState } from 'react';
import './Products.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { centToRandDisplay } from '../../utils'

const Products = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCjee_43JuzUuDNUa0n6BvBdPtKU-nBWaA",
        authDomain: "simplysharpstationary.firebaseapp.com",
        projectId: "simplysharpstationary",
        storageBucket: "simplysharpstationary.appspot.com",
        messagingSenderId: "100648697476",
        appId: "1:100648697476:web:dd515e035c250c685d0cd1",
        measurementId: "G-WPV3Z4S43D"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchAndSetProducts();
    }, []);

    const fetchAndSetProducts = async () => {
        const productsCol = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => doc.data());
        setProducts(productsList)
    };



    const renderProduct = (product) => {
        return <div className="product">
            <div className="product-name">{product.name}</div>
            <div className="product-image">
                <img src={product.image_url} />
            </div>
            <div className="product-price">{centToRandDisplay(product.cent_price)}</div>
        </div>
    }

    return (
        <div className="Products">
            <div className="products-container">
                {products.map(renderProduct)}
            </div>
        </div>
    );
};
export default Products;
