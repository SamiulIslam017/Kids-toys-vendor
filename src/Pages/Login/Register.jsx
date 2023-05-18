import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const {createUser,googleLogin} = useContext(AuthContext);
    async function handleRegister(e){
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError('')
        if (password < 6) {
            setError('Password must be 6 characters');
            return;
        }
        try {
            await createUser(email,password,name,photo)
            setError('');
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Account Create Successfully Done',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/');
            form.reset();

        } catch (error) {
            console.log(error);
        }
    }


    const handleGoogleLogin= () => {
        googleLogin()
        .then(result => {
            const googleUser = result.user;
            console.log(googleUser);
            setError('');
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Google login Successfully Done',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/');
        })
        .catch(err => {
            setError(err)
            console.log(err);
        })
    }
  return (
    <div className="w-6/12 mx-auto my-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <form onSubmit={handleRegister} className="border border-slate-200 p-8 rounded-md shadow-2xl">
      <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
          <p className="text-error my-2">{error}</p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url(optiobal) </span>
          </label>
          <input
            type="text"
            placeholder="Photo url"
            name="photo"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Register Now"
            className="btn primary-bg-color border-0"
          />
        </div>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <div className="grid h-20  place-items-center">
            <button onClick={handleGoogleLogin} className="border border-slate-100">
              <img
                className="w-40"
                src="https://i.ibb.co/4gGqtjD/oie-jpg.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="text-center font-base">
          <p>
            Already have an account? <Link to="/login" className="custom-color font-bold">
              Login Now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
