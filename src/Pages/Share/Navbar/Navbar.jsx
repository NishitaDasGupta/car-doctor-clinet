import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error.message);
            });
    }
    const navbarLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {
            user
                ?
                <div className="flex items-center justify-center">
                     <li><Link to="/mybookings">My Bookings</Link></li>
                    <p className="pr-2 text-xl text-blue-500">{user.email}</p>
                    <button onClick={handleLogOut} className="text-gray-500">Log Out</button>
                </div>
                :
                <li><Link to="/login">LogIn</Link></li>

        }
    </>
    return (
        <div className="my-11">
            <div className="navbar bg-base-100 h-24 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navbarLink}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl h-24">

                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbarLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline btn-error">Appooinment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;