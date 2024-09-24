const CategoryBtns = () => {
    return (
        <>
            <form className="radio-inputs">
            <label className="radio" id="mobile">
                <input type="radio" name="radio" htmlFor="mobile" />
                <span className="name">Mobile</span>
            </label>
            <label className="radio" id="laptop">
                <input type="radio" name="radio" htmlFor="laptop" />
                <span className="name">Laptop</span>
            </label>
            <label className="radio" id="tv">
                <input type="radio" name="radio" htmlFor="tv" />
                <span className="name">TV</span>
            </label>
            <label className="radio" id="gaming">
                <input type="radio" name="radio" htmlFor="gaming" />
                <span className="name">Gaming</span>
            </label>
            <label className="radio" id="appliances">
                <input type="radio" name="radio" htmlFor="appliances" />
                <span className="name">Appliances</span>
            </label>
            <label className="radio" id="audio">
                <input type="radio" name="radio" htmlFor="audio" />
                <span className="name">Audio</span>
            </label>
            
            </form>
        </>
    )
}

export default CategoryBtns