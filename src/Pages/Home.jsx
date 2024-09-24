import { Link } from "react-router-dom"

const Home = () => {    
    return (
        <>
        <div className="home-abt">
            <h1>Your one-stop destination for all your shopping needs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio perferendis quis commodi nemo doloremque, vitae libero inventore aut aliquid adipisci, minima sint rem distinctio hic quisquam cupiditate repellat ex!</p>
            <Link to={'/shop'}> <button className="shop-now-btn">Shop now</button> </Link>
        </div>
        <div className="ft-items"></div>
        </>
    )
}

export default Home