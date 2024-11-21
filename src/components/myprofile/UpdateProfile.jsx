import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";

const UpdateProfile = () => {
    
    const {UpdateUser} = useContext(AuthContext)
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const navigate = useNavigate()
    const auth= getAuth(app)

    const handleUpdate= e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const updatedName = form.get('name')
        const updatedPhotoURL = form.get('photoURL')
        


        UpdateUser( updatedName, updatedPhotoURL)
        .then(result => {
            // console.log(result.user)
        alert('Updated Successfully')
        navigate(location?.state ? location.state : '/profile')
        })
        .catch(error => {
            console.error(error)
            alert('did not update')
          })

    } 

    return (
        <div className='mx-auto  w-3/4 mt-12'>
        <form onSubmit={handleUpdate} className="card-body md:w-3/4 lg:w-1/2 mx-auto ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" name="name" className="input input-bordered"  onChange={ setName} required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input type="text" placeholder="photoUrl" name="photoURL" className="input input-bordered"   onChange={ setPhotoURL}   required />
          </div>

          <div className="form-control mt-6">
            <button className="w-full py-3 px-4 rounded-lg bg-sky-700 text-white">Update Information</button>
          </div>
          
        </form>

  
        
      </div>
    );
};

export default UpdateProfile;