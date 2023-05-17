import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const SocialMedia = ({ from }) => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error.message);

            });
    }
    return (
        <div>
          
            <div className="text-center">
                <button onClick={handleGoogle} className="btn btn-circle btn-outline"> G </button>
            </div>
        </div>
    );
};

export default SocialMedia;