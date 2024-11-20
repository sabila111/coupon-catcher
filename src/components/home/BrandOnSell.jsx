import 'animate.css'
const BrandOnSell = ({brand}) => {
    const{brand_name, brand_logo, category, coupons} = brand
    return (
        <div className="card bg-base-100 w-[300px] shadow-xl animate__animated animate__bounce animate__delay-2s">
  <figure>
    <img className="w-full h-48 p-4 rounded-3xl"
      src={brand_logo} />
  </figure>
  <div className="ml-4">
    <h2 className="text-2xl font-bold ">{brand_name}</h2>
    <p className="font-semibold text-gray-500 mb-1">Category: {category}</p>
    <p className="font-semibold mb-5">Available coupons: {coupons.length}</p>
  </div>
</div>
    );
};

export default BrandOnSell;