import { useState } from 'react';
import axios from 'axios';

const ProductForm = props => {
    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: "",
    });

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', form)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label className="mt-3 mx-2">Title: </label>
                <input type="text" name='title' onChange={onChangeHandler} />
            </div>
            <div className="form-group">
                <label className="mt-3 mx-2">Price: </label>
                <input type="float" name='price' onChange={onChangeHandler} />
            </div>
            <div className="form-group">
                <label className="mt-3 mx-2">Description: </label>
                <input type="text" name='description' onChange={onChangeHandler} />
            </div>
            <div className="form-group mt-1">
                <button className="btn btn-primary mx-2" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default ProductForm;