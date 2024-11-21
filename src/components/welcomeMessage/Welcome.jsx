import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Welcome = () => {
    const{user} = useContext(AuthContext)
    return (
        <div className="my-5">
           {user ? (
        <p className="text-3xl font-bold text-center text-sky-700">
          Welcome, <span className="font-bold">{user.displayName || "User"}</span>!
        </p>
      ) : (
        <p className="text-sm text-gray-600"></p>
      )}
        </div>
    );
};

export default Welcome;