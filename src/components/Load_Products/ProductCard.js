

const ProductCard=(products)=>{
    return (
        <div className="container">

            <img 
            src={products.images}
            alt={products.images}
            key={products.id}
            />
            <h3>{products.title}</h3>
           
        </div>
    )
}

export default ProductCard;