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
       <div className="mt-20 text-center">
 <h2 className="text-4xl font-bold ">Available <span className="font-bold text-4xl px-1 bg-sky-700 text-white">Brands</span> on Sale</h2>
 <p className="text-gray-500 font-semibold text-xl mt-5">Discover our latest trends</p>
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-5">



            {
                brands.filter((brand) => brand.isSaleOn).map(brand=> <BrandOnSell key={brand._id} brand={brand}></BrandOnSell>)
            }
        </div>
       </div>
    );
};

export default BrandSell;