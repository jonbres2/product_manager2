import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = props => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data.products);
                setLoaded(true);
            });
    }, [loaded])

    return (
        <div>
            <h1>Add a new Product!</h1>
            <ProductForm />
            <br /><br />
            <h1>View All Products!</h1>
            {loaded && <ProductList products={products} />}
        </div>
    )
}

export default Main;