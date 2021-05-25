import { useEffect, useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const ProductUpdate = props => {
    const id = props.id;

    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setForm(res.data.product[0]))
            .catch(err => console.log(err))
    }, [id])

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, form)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label className="mt-3 mx-2">Title: </label>
                <input type="text" name='title' onChange={onChangeHandler} value={form.title} />
            </div>
            <div className="form-group">
                <label className="mt-3 mx-2">Price: </label>
                <input type="float" name='price' onChange={onChangeHandler} value={form.price}  />
            </div>
            <div className="form-group">
                <label className="mt-3 mx-2">Description: </label>
                <input type="text" name='description' onChange={onChangeHandler} value={form.description}  />
            </div>
            <div className="form-group mt-1">
                <button className="btn btn-primary mx-2" type="submit">Submit</button>
            </div>
        </form>
        </div>
    )
}

export default ProductUpdate;