import { ShoppingCart } from 'lucide-react'
import defaultImg from '../Assets/noImgFound-img.jpg'
import { Link } from 'react-router-dom';

const Item = ({title, image = defaultImg, price, description, category, id}) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="item-card">
            <div className="item-img">
            <img src={image} alt={title} />
            </div>
            <div className="item-info">
            <h2>{title}</h2>
            <p className="item-category">Category: {capitalizeFirstLetter(category)}</p>
            <p className="item-desc">{description}</p>
            <div><h2>${price}</h2> <Link to={`/shop/${id}`}> <button  data-id={id} className="addToCart"><ShoppingCart color='white'/> Add to cart</button> </Link></div>
            </div>
        </div>
    )
}

export default Item