import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";

const TopBrands = () => {
    const [brands, setBrands] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("donation.json")
            .then((response) => response.json())
            .then((data) => setBrands(data))
            .catch((error) => console.error("Error fetching brands", error));
    }, []);

    return (
        <div className="mt-14 text-center">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold ">Our top <span className="font-bold text-2xl md:text-4xl lg:text-4xl px-1 bg-sky-700 text-white">Brands</span> selected for you</h2>
         <p className="text-gray-500 font-semibold text-lg md:text-xl lg:text-xl mt-5">Discover our latest trends</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10 mt-10">

            {
                
            brands.map((brand) => (
          <div key={brand._id} className="">
            <Link to={`/brand/${brand._id}`}> 
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-44 h-28 md:h-40 lg:h-40 ml-10"
            />
            </Link>
            
          </div>
        ))
        
        }
            </Marquee>

        </div>
    );
};

export default TopBrands;