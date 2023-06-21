import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useTitle('Log In')

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('')
    login(email, password)
      .then(result => {
        const loggedUser = result.user;

        const logUser = {
          email: loggedUser.email
        }
        console.log(logUser);
        setError('');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully Login',
          showConfirmButton: false,
          timer: 1500
        })
        form.reset();
        // navigate(from, {replace: true});
      })
      .catch(error => {
        setError('Password or email did not matched')
        console.log(error);
      })
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const googleUser = result.user;
        console.log(googleUser);
        setError('')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully Login With Google',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true });
      })
  }
  return (
    <div className="w-11/12 md:w-6/12 lg:w-6/12 mx-auto my-20">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl  font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <form onSubmit={handleLogin} className="border border-slate-200 p-8 rounded-md shadow-2xl">
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
          <label className="label">
            <a href="" className="label-text-alt link link-hover" aria-readonly>
              Forgot password?
            </a>
          </label>
        </div>
        <p className="font-medium text-base text-error py-2">{error}</p>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Log In"
            className="btn primary-bg-color border-0"
          />
        </div>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <div className="grid h-20  place-items-center">
            <button onClick={handleGoogleLogin} className="border border-slate-100"><img className="w-40" src="https://i.ibb.co/4gGqtjD/oie-jpg.png" alt="" /></button>
          </div>
        </div>
        <div className="text-center font-base">
          <p>New In our vendor? <Link to="/register" className="custom-color font-bold">Register Now!!</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
