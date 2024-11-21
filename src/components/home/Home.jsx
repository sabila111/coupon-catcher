import Footer from "../footer/Footer";
import BrandSell from "./BrandSell";
import Faq from "./Faq";
import Slider from "./Slider";
import TopBrands from "./TopBrands";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopBrands></TopBrands>
            <BrandSell></BrandSell>
            <Faq></Faq>
        </div>
    );
};

export default Home;