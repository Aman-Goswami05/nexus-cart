import React,{useEffect,useState} from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductList = ({productItem}) => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/Products',{
            method: "GET",
        }).then((res) => res.json())
        .then((data)=>{
            setProducts(data);
        });
    }, []);
    return (
        <>
            <div className="card-container">
                <h3 className="title">{productItem.data}</h3>
                <div className="product-container">
                    {
                        products.map(product => {
                            return (
                                <div className="product">
                                <img src={product.Image} alt=""></img>
                                    <h3>{product.title}</h3>
                                    <div className="price">
                                        ${product.newPrice}
                                    </div>
                                    <Link className="product-info-button" to={`/Product-Details/${product._id}`}>
                                        <FaInfoCircle size={15}/>
                                        <h3>Details</h3>
                                    </Link>
                            </div>        
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ProductList;