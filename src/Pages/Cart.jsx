import CartItem from "../Components/CartItem";

const Cart = () => {


    let allProducts = JSON.parse(localStorage.getItem("productsStorage"))
  ? JSON.parse(localStorage.getItem("productsStorage"))
  : [];

    return (
        <>
        <div className="shopping-cart">
            {allProducts.length > 0 && allProducts.map(p => {
                return <CartItem title={p.title} price={p.price} image={p.image} id={p.id} key={p.id}/>
            })}
        </div>
        </>
    )
}

export default Cart