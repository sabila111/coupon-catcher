
const BrandOnSell = ({brand}) => {
    const{brand_name, brand_logo, category, coupons} = brand
    return (
        <div className="card bg-base-100 w-[300px] shadow-xl">
  <figure>
    <img className="w-full h-48 p-4 rounded-3xl"
      src={brand_logo} />
  </figure>
  <div className="ml-4">
    <h2 className="card-title">{brand_name}</h2>
    <p>Category: {category}</p>
    <p>Available coupons: {coupons.length}</p>
  </div>
</div>
    );
};

export default BrandOnSell;