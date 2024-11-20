import { useEffect, useState } from "react";
import BrandOnSell from "./BrandOnSell";


const BrandSell = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch("donation.json")
            .then((response) => response.json())
            .then((data) => setBrands(data))
            .catch((error) => console.error("Error fetching brands", error));
    }, []);
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-5">



            {
                brands.filter((brand) => brand.isSaleOn).map(brand=> <BrandOnSell key={brand._id} brand={brand}></BrandOnSell>)
            }
        </div>
    );
};

export default BrandSell;