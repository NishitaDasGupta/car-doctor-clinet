import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
    const service = useLoaderData();
    const { img, title, service_id, price } = service;
    const { user } = useContext(AuthContext);
    const handleCheckout = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        // const phone = form.phone.value;
        const message = form.message.value;
        console.log(name, date, email, message);
        const order = {
            customerName: name,
            img: img,
            date,
            email,
            price,
            service: title,
            service_id: service_id,
        };
        console.log(order);
        fetch('https://car-doctor-server-three-smoky.vercel.app/bookings',
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(order)
            }

        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("Service Successfully Added")
                }
            })

    }
    return (
        <div className="bg-base-200">
            <h2 className="text-3xl text-center pt-4 font-bold">Book Service: {title}</h2>
            <form onSubmit={handleCheckout} className="w-3/4 mx-auto py-12 ">
                <div className="grid grid-col-1 lg:grid-cols-2 gap-6">
                    <div className="form-control">
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Service Price" defaultValue={price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">

                    <input type="text" name="message" placeholder="Your Message" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary bg-orange-600" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;