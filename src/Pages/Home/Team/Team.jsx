import team1 from "../../../assets/images/team/1.jpg"
import team2 from "../../../assets/images/team/2.jpg"
import team3 from "../../../assets/images/team/3.jpg"


import { FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
const Team = () => {
    const socialMedia = <>
        <div className="flex items-center justify-center text-2xl gap-4">
            <FaFacebook />
            <FaTwitter />
            <FaInstagramSquare />
            <FaLinkedin />
        </div>
    </>
    return (
        <div className="my-32 ">
            <div className="text-center mb-12 space-y-5">
                <h3 className="text-orange-600 text-2xl font-bold">Team</h3>
                <h1 className="text-5xl font-bold">Meet Our Team</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team1} alt="Service" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-bold">Car Engine Plug</h2>
                        <p className=" text-xl font-bold">Engine Expert</p>
                        {socialMedia}

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team2} alt="Service" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-bold">Car Engine Plug</h2>
                        <p className=" text-xl font-bold">Engine Expert</p>

                        {socialMedia}
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team3} alt="Service" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-bold">Car Engine Plug</h2>
                        <p className=" text-xl font-bold">Engine Expert</p>

                        {socialMedia}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;