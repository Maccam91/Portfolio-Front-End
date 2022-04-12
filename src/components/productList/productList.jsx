import "./productList.css"
import Product from "../product/Product"
import { products } from  "../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
            <h1 className="pl-title"> Some Projects I've created</h1>
            <p className="pl-desc">
                These projects are just the beginning of my journey in this career transition and as I grow so will my portfolio.
            </p>
            </div>
            <div className="pl-list">
            {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
            </div>
        </div>
    )
}

export default ProductList