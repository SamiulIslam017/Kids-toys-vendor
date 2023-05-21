import { Link } from "react-router-dom";
import GallerySection from "../Shared/GallerySection";
import Seller from "../Shared/Seller";
import Countdown from "react-countdown";
import ShopSection from "../Shared/Category/ShopSection";

const Home = () => {
  return (
    <div className="flex flex-col gap-14 md:gap-24 lg:gap-24">
      {/* Banner section  */}
      <div
        className="hero min-h-screen bg-center"
        style={{
          backgroundImage: `url("https://i.ibb.co/34fzBvp/22895273-6687810-clipdrop-remove-text-clipdrop-cleanup.jpg")`,
          backgroundPosition: "bottom center",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className=" w-2/3 text-left text-black">
          <div className="w-full md:w-10/12 lg:w-5/12">
            <h1 className="text-2xl font-medium mb-5 text-black tracking-wider">
              Big fun kid&apos;s
            </h1>
            <h1 className="mb-5 text-5xl md:text-7xl lg:text-7xl font-bold custom-color tracking-wider">
              A World To Explore
            </h1>
            <p className="mb-5 tracking-wide">
              Active toys for smart and active kids. Bring fun and non-stop
              learning for your little ones.
            </p>
            <button className="btn primary-bg-color border-0">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Gallery section */}

      <div>
        <div className="text-center mb-10 w-10/12 md:w-6/12 lg:w-6/12 mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Photo Gallery</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <GallerySection></GallerySection>
      </div>

      {/* category section */}

      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10 w-10/12 md:w-6/12 lg:w-6/12 mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Products showcase</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <ShopSection></ShopSection>
      </div>

      {/* Sponsors section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 w-10/12 md:w-6/12 lg:w-6/12 mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Sponsors</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <Seller></Seller>
      </div>

      {/* Countdown section */}
      <div className="text-4xl md:text-7xl lg:text-7xl text-center py-14 bg-[url('https://i.ibb.co/QMTYtg8/istockphoto-1387740468-612x612.jpg')] bg-no-repeat bg-cover">
        <div className="text-center  w-10/12 md:w-4/12 lg:w-4/12 mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Flash Sales</h1>
          <p className="py-6 text-4xl">15% Discount On All Kids Education Toys</p>
        </div>
        <Countdown className="block" date={Date.now() + 5000000000} />

        <Link to="/allToys"><button className="btn primary-bg-color border-0">Buy Now</button></Link>
      </div>
    </div>
  );
};

export default Home;
