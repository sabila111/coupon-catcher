

const BrandDetailsCard = ({brand}) => {
    const { coupon_code, description, expiry_date,condition, coupon_type} = brand
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <div className="">
    <h2 className="card-title">Code:{coupon_code}</h2>
    <p>{description}</p>
    <p>{expiry_date}</p>
    <p>{condition}</p>
    <p>{coupon_type}</p>

    <div className="flex justify-around">
      <button className="text-xl font-semibold px-3 py-4">Copy Code</button>
      <button className="text-xl font-semibold px-3 py-4">use Now</button>
    </div>
  </div>
</div>
    );
};

export default BrandDetailsCard;