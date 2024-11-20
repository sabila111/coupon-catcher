import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";

const BrandDetails = () => {
    const brands = useLoaderData()
    const {id} = useParams()
    const brand = brands.find((brand) => brand._id === id)
    return (
        <div>
            <h2>{brand.brand_name}</h2>
            
          <div>
          {
            brand.coupons.map((brand) => <BrandDetailsCard key={brand} brand={brand}></BrandDetailsCard>)
           }
          </div>
        </div>
    );
};

export default BrandDetails;