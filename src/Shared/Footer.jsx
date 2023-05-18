import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-white shadow-2xl  border-t-2 border-gray-100">
      <footer className="footer p-10  text-base-content max-w-7xl mx-auto">
        <div>
          <img
            src="https://i.ibb.co/WxTw08d/39cc8ddffab5435abb08bfa5b997d6df-removebg-preview-1.png"
            alt=""
          />
          <p>
            Kids Toys Vendor
            <br />
            Providing Kids Toys since 2020
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/allToys">All Toys</Link>
          <Link to="/myToys">My Toys</Link>
          <Link to="/addAToy">Add a toy</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <span className="footer-title">Company Location</span>
          <p>Powerhouse para</p>
          <p>Pabna sadar</p>
          <p>Pabna, 6600</p>
          <a href="mailto: samiul641@gmail.com" className="custom-color">
            samiul641@gmail.com
          </a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="flex gap-3 text-lg">
            <a href="https://www.facebook.com/biborno.somoy.9/">
              <FaFacebook></FaFacebook>
            </a>
            <a href="https://github.com/SamiulIslam017">
              <FaGithub></FaGithub>
            </a>
            <a href="https://www.linkedin.com/in/samiul-islam-7a9a0a15a/">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
          <div className="form-control mt-8">
            <label className="input-group">
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered"
              />
              <span className="primary-bg-color">Subscribe</span>
            </label>
          </div>
        </div>
      </footer>
      <div className="bg-black text-[#19C1DD] text-center py-4">
        <p>Copyright © 2023 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
