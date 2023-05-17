

const ProductCard = ({ product }) => {
    const { img, price, title } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Service" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <p className="text-orange-600 text-xl font-bold">Price: ${price}</p>


            </div>
        </div>
    );
};

export default ProductCard;