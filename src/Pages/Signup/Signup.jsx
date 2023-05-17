import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialMedia from "../Share/SocialMedia/SocialMedia";
const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email);
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2">

                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Signup!</h1>
                        <form onSubmit={handleSignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Signup" />
                            </div>
                        </form>
                        <div className="divider">Or Sign up with</div>
                        <SocialMedia></SocialMedia>
                        <p className="text-center font-bold">Already have an account? <Link className="text-orange-600" to="/login">Log in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;