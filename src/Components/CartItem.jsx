import { X, Plus, Minus } from "lucide-react"
import { useState } from "react"

const CartItem = ({title, price, image, id}) => {

    let allProducts = JSON.parse(localStorage.getItem("productsStorage"))
    ? JSON.parse(localStorage.getItem("productsStorage"))
    : [];

    const [productCount, setProductCount] = useState(1)

  
    const handleIncrement = () => {
        setProductCount(prevCount => Number(prevCount) + 1)
    }

    const handleDecrement = () => {
        if (productCount > 1) {   
            setProductCount(prevCount => Number(prevCount) - 1)
        }
    }

    const handleInput = (e) => {
        setProductCount(e.target.value)        
    }

    const handleDelete = (e) => {
        const id = e.target.parentNode.parentNode.getAttribute('id')
        e.target.parentNode.parentNode.remove()
        const index = findProductIndex(id)
        console.log(index);
        
        allProducts.splice(index, 1);
        localStorage.clear();
        localStorage.setItem("productsStorage", JSON.stringify(allProducts));
    
    }

    const findProductIndex = (id) => {
        for (const [i, t] of allProducts.entries()) {
            if (t.id == id) {
                return i
            }
        }
    }



    return (
        <>
            <div className={`cart-item`} id={`${id}`}>
                <div className="item-pic"><img src={image} alt={title} /></div>
                <div className="item-title">{title}</div>
                <div className="item-count">
                <div className="number-input">
                    <button onClick={handleDecrement}><Minus size={20}/></button>
                    <input onChange={handleInput} className="quantity" min="0" name="quantity" value={productCount} type="number" />
                    <button onClick={handleIncrement} className="plus"><Plus size={20}/></button>
                </div>
                        {/* <Minus fill='white' onClick={handleDecrement}/>
                        <input type="number" name="product-input" id="product-input" min={1} value={1} onChange={handleInput}/>
                        <Plus fill='white' onClick={handleIncrement}/> */}
                </div>
                <div className="item-price">{price * Number(productCount        )}$</div>
                <div className="item-removeIcon">< X onClick={handleDelete}/></div>
            </div>
        </>
    )

}

export default CartItem