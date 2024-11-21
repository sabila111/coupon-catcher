import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>

      <div
        className="hero max-w-5xl mx-auto mt-10 py-14"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/QKTZvGb/6.jpg)",
        }}>

        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-black text-5xl font-bold">Welcome to Your Profile</h1>

          </div>
        </div>
      </div>

      <div className="card bg-base-100 max-w-sm mx-auto shadow-xl mt-10 mb-5 text-center">
  <figure>
    <img className="w-full h-48 p-4 rounded-3xl"
      src={user.photoURL} />
  </figure>
  <div className="ml-4">
    <h2 className="text-2xl font-bold ">Name: {user.displayName}</h2>
    <p className="font-semibold text-lg text-gray-500 mb-3">Email: {user.email}</p>
    <Link to='/UpdateProfile'>
    <button className="px-4 py-3 mb-5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-400 text-white font-bold text-lg">Update Profile</button>
    </Link>
  </div>
</div>
    </div>
  );
};

export default MyProfile;