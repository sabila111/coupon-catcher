import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";

const BrandDetails = () => {
    const brands = useLoaderData()
    const {id} = useParams()
    const brand = brands.find((brand) => brand._id === id)
    return (
        <div>
            <img className="w-3/6 h-56 mt-10 mx-auto" src={brand.brand_logo} alt="" />
            <p className="text-4xl font-extrabold my-5 text-center">{brand.brand_name} </p>

            <div className="rating flex justify-center items-center">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                    />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>

          <div className="my-5">
          {
            brand.coupons.map((brand) => <BrandDetailsCard key={brand} brand={brand}></BrandDetailsCard>)
           }
          </div>
        </div>
    );
};

export default BrandDetails;