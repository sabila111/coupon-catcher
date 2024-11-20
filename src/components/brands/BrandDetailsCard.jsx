import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const BrandDetailsCard = ({brand}) => {
    const { coupon_code,shop_Link, description, expiry_date,condition, coupon_type} = brand

    const handleCopy = (code) => {
        toast.success(`Copied "${code}" to clipboard!`);
      };

    return (
        <div className="card mx-auto border-2 border-sky-700 bg-sky-200 p-7 my-10 w-96 shadow-xl">
  <div className="">
    <h2 className="text-2xl font-bold mb-2">{description}</h2>
    <p className="text-xl font-semibold my-3">Code: {coupon_code}</p>
    <p className="text-lg font-normal">Expire Date: {expiry_date}</p>
    <p className="text-lg font-normal">Condition: {condition}</p>
    <p className="text-lg font-normal">Coupon type: {coupon_type}</p>

    <div className="flex justify-between my-5">

     <CopyToClipboard text={coupon_code} onCopy={()=> handleCopy(coupon_code)}>
     <button className="text-xl font-semibold px-4 py-4 bg-sky-700 border-2 border-sky-700 rounded-xl text-white">Copy Code</button>
     </CopyToClipboard>

      <button onClick={()=> window.open(shop_Link, 'blank')} className="text-xl font-semibold px-4 py-3 bg-white text-sky-700 rounded-xl border-2 border-sky-700">use Now</button>
    </div>
  </div>
  <ToastContainer />
</div>
    );
};

export default BrandDetailsCard;