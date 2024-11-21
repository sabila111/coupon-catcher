import Footer from "../footer/Footer";
import BrandSell from "./BrandSell";
import Faq from "./Faq";
import Newsletter from "./Newsletter";
import Slider from "./Slider";
import TopBrands from "./TopBrands";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopBrands></TopBrands>
            <BrandSell></BrandSell>
            <Newsletter></Newsletter>
            <Faq></Faq>
        </div>
    );
};

export default Home;