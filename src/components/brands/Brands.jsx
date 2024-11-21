import { useLoaderData } from "react-router-dom";
import BrandsCard from "./BrandsCard";


const Brands = () => {
    const brands = useLoaderData()
    
    return (
        <div className="mt-20">
            
            <label className="max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>

            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold  text-center mt-10">Our <span className="bg-sky-700 text-white pl-2">available </span> all brands</h2>
            <div className="mt-14">
                {
                    brands.map(brand => <BrandsCard key={brand._id} brand={brand}></BrandsCard>)
                }
            </div>
        </div>
    );
};

export default Brands;