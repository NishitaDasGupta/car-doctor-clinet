import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBookingTable from "./MyBookingTable";
import { useNavigate } from "react-router-dom";



const MyBookings = () => {
    const { user, logOut } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    const url = `https://car-doctor-server-three-smoky.vercel.app/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("car-access-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data);
                }
                else {
                    logOut()
                        .then(() => {
                            // Sign-out successful.
                            localStorage.removeItem('car-access-token');
                            navigate('/login');
                        }).catch((error) => {
                            console.log(error.message);
                        });
                }

            })
    }, [])
    const handleDelete = id => {
        console.log(id);
        const proceed = confirm("Are you sure to delete ?");
        if (proceed) {
            fetch(`https://car-doctor-server-three-smoky.vercel.app/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        alert('Deleted!');
                        const remain = bookings.filter(
                            booking => booking._id !== id);
                        // console.log(remain);
                        setBookings(remain);

                    }
                }

                )
        }
    }
    const handleConfirm = id => {
        fetch(`https://car-doctor-server-three-smoky.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers:
            {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    const remaining = bookings.filter(booking => booking._id !== id);

                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';

                    const newBookings = [updated, ...remaining];
                    console.log(newBookings);
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div>
            <h2>Total Bookings {bookings.length}</h2>


            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th></th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking =>
                            <MyBookingTable
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></MyBookingTable>
                        )
                    }
                </tbody>


            </table>
        </div>


    );
};

export default MyBookings;