import pic from '../Assets/noImgFound-img.jpg'
import Loader from '../Components/Loader'
import { Plus } from 'lucide-react'
import { Minus } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'


const ProductPage = () => {
    const [products, setProducts] = useState([])
    const {productId} = useParams() 
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    let allProducts = JSON.parse(localStorage.getItem("productsStorage"))
  ? JSON.parse(localStorage.getItem("productsStorage"))
  : [];
  
    useEffect(() => {
        if (productId) {
            fetch(`https://fakestoreapi.in/api/products/${productId}`, { mode: "cors" }, )
            .then((response) => {
          if (response.status >= 400) {
              throw new Error("server error");
            }
            return response.json();
        })
        .then((response) => setData(response.product))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
    }, [productId]);   
    console.log(data);
     

    if (loading) return <Loader />;
    if (error) return <p>A network error was encountered</p>;

    const addToCart = () => {
            const title = data.title
            const price = data.price
            const image = data.image
            const id = uuid()

            // setProducts(p => [...p, {title, price, image}])
        allProducts.push({title, price, image, id})
        localStorage.setItem("productsStorage", JSON.stringify(allProducts));
    }
    
    
    

    return (
        <div className='product-page'>
            <div className="div1">
                <div className="product-img">
                    <img src={data.image} alt=""  className='product-pic'/>
                </div>
                <div className="get-product">
                    <h2>{data.title}</h2>
                    <p>${data.price}</p>
                    <div className="submit-product">
                        {/* <form>
                        <Minus fill='white' onClick={handleDecrement}/>
                        <input type="number" name="product-input" id="product-input" min={1} value={productCount} onChange={handleInput}/>
                        <Plus fill='white' onClick={handleIncrement}/>
                        </form> */}
                        <button className="shop-now-btn" onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="product-desc">
                <h3>Description</h3>
                {data.description}
            </div>
        </div>
    )
}

export default ProductPage