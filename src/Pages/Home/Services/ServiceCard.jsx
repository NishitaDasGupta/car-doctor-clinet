
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { img, price, title , _id} = service;
    // console.log(_id);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Service" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
               
                <div className='flex items-center justify-center'>
                <p className="text-orange-600 text-xl font-bold">Price: ${price}</p>
           <Link to={`/checkout/${_id}`}>   
             <button className="btn btn-outline border-white hover:bg-orange-400 hover:border-white ">
                    <p className='text-2xl text-orange-700'><AiOutlineArrowRight /></p>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;