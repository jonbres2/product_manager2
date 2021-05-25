import {Link} from "@reach/router"
import axios from "axios"

const ProductList = props => {
    const onDeleteHandler = _id => {
        if(window.confirm("Are you sure you want to delete this product?")){
            axios.delete(`http://localhost:8000/api/products/${_id}`)
        }
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Title:</th>
                        <th>Price:</th>
                        <th>Description:</th>
                        <th>Actions:</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, idx) => {
                        return <tr key={idx}>
                            <td><Link to={`/products/${product._id}/edit`}>{product._id}</Link></td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td><button className="btn btn-danger btn-sm" onClick={() => onDeleteHandler(product._id)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;