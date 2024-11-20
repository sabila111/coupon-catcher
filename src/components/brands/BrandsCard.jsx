import 'animate.css'
import PrivateRoute from '../privateRoute/PrivateRoute';
import { Link } from 'react-router-dom';
const BrandsCard = ({ brand }) => {
    const { brand_name, rating, description, brand_logo, isSaleOn, category } = brand
    return (
        <div className="card p-5 mb-10 bg-base-100 max-w-xl mx-auto shadow-xl">
            <figure>
                <img
                    className="w-full h-72 rounded-xl"
                    src={brand_logo} />
            </figure>

            <h2 className="text-center font-bold text-3xl py-3">{brand_name}</h2>
            <p className="text-gray-500 text-center ">Category: {category}</p>

            <div className="flex justify-center gap-10 items-center mt-3">
                <div className="rating">
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
                <p className="font-bold text-xl ">({rating})</p>
            </div>

            <p className="text-gray-600 font-semibold text-center mt-4">{description}</p>
            <PrivateRoute>
            <div className="text-center">
                <Link to={`/brand/${brand._id}`}>
                <button className="px-3 py-4 rounded-xl font-bold text-xl bg-sky-700 text-white my-5 ">View Coupons</button>
                </Link>
            </div>
            </PrivateRoute>
            {
                isSaleOn && (<p className="animate__animated animate__bounce animate__delay-3s font-bold text-center text-2xl text-sky-700 pb-8">🔥 Sale is On!!</p>)
            }

        </div>
    );
};

export default BrandsCard;