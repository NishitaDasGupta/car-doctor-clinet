import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <About></About>
            <Services></Services>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;