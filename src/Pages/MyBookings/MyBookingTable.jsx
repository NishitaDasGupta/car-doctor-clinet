
const MyBookingTable = ({ booking, handleDelete, handleConfirm }) => {
    const { img, _id, price, service, date, status } = booking;
    return (


        <tr>
            <th>
                <button onClick={() => { handleDelete(_id) }} className="btn btn-xs btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <p>{service}</p>
            </td>
            <td>
                <p>{price}</p>
            </td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ?
                        <span className="text-blue-700 font-bold">Confirmed</span>
                        :
                        <button onClick={() => handleConfirm(_id)} className="btn bg-orange-600 btn-xs ">Please Confirm</button>


                }
            </th>
        </tr>

    );
};

export default MyBookingTable;