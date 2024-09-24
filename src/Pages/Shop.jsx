import { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import Item from "../Components/Item";
import CategoryBtns from "../Components/CategoryBtns";

const Shop = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(null)

    if (!category) {  
      fetch(`https://fakestoreapi.in/api/products`, { mode: "cors" }, )
      .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => setData(response.products))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
      }

    setTimeout(() => {
      const categBtns = document.querySelectorAll('.radio-inputs input')
      
      for (const btn of categBtns) {
        btn.addEventListener('click', () => {
          const btnId = btn.parentElement.childNodes[0].getAttribute('for')
          setCategory(btnId)
        })
      }
    }, 500);

    useEffect(() => {
      if (category) {
        
        fetch(`https://fakestoreapi.in/api/products/category?type=${category}`, { mode: "cors" }, )
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => setData(response.products))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
      }
    }, [category]);

    
    
    if (loading) return <Loader />;
    if (error) return <p>A network error was encountered</p>;

    return (
        <>
        <CategoryBtns /> 
        <div className="shop-items">
        {data.map(e => {
            return (
                <Item title={e.title} price={e.price} image={e.image} description={e.description} category={e.category} key={e.id} id={e.id} />
            )
        })}
        </div>
        </>
    )
}

export default Shop