
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 px-9">
            <div className="hero-content flex-col lg:flex-row">

                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
                    <img src={parts} className="border-8 border-white w-1/2  absolute left-56 top-1/2 rounded-xl shadow-2xl" />
                </div>
                <div className="lg:w-1/2 space-y-6 ">
                    <p className="text-orange-500 text-xl font-bold">About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p >The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                    <button className="btn bg-orange-600 border-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;