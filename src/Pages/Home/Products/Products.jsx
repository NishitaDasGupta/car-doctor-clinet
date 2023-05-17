import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div className="my-32 ">
        <div className="text-center mb-12 space-y-5">
            <h3 className="text-orange-600 text-2xl font-bold">Popular Products</h3>
            <h1 className="text-5xl font-bold">Browse Our products</h1>
            <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                >

                </ProductCard>)
            }
            
        </div>
    </div>
    );
};

export default Products;