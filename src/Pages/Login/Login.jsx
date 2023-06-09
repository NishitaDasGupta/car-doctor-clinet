import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialMedia from "../Share/SocialMedia/SocialMedia";
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                 navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
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
                        <h1 className="text-5xl font-bold text-center">Login!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className="divider">Or Sign in with</div>
                        <SocialMedia
                            from={from}
                        ></SocialMedia>
                        <p className="text-center font-bold">New to Car Doctor? <Link to="/signup"
                            className="text-orange-600">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;