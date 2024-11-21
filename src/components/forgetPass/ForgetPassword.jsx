import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    
    const {LogOut}= useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const[email, setEmail] = useState('')

    const oldEmail = location.state?.email

    useEffect(()=>{
        const value = JSON.parse(localStorage.getItem('email'))
        setEmail(value)
    },[])

    const handleResetPassword = e => {
        e.preventDefault()
        // console.log(e.currentTarget)
        const form = e.target;
    const email = form.email.value;
    window.open("https://mail.google.com", "_blank");

    
    LogOut()
      .then(() => {
        alert("You have been logged out.");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error during logout:");
      });

    }


    return (
         <form onSubmit={handleResetPassword} className="card-body md:w-3/4 lg:w-1/2 mx-auto ">
        <h2 className='text-center text-4xl font-extrabold mb-7'>Reset Password Form</h2>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-base font-medium">Email</span>
                </label>
                <input type="email" defaultValue={email} placeholder="email" name="email" className="input input-bordered text-base font-medium" required />
            </div>
            
            <div className="form-control mt-6">
                <button className="w-full py-3 px-4 rounded-lg bg-sky-700 text-white">Reset Password</button>
            </div>

            
        </form>
    );
};

export default ForgetPassword;