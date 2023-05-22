import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";
import useTitle from "../hooks/useTitle";

const SingleToyDetails = () => {
  const singleToy = useLoaderData();
  const {toyUrl, toyName,email, sellerName, price,rating, qty, description} = singleToy; 
  useTitle(`Kids Toy Vendor | ${toyName}`);
  return (
    <div className="w-10/12 mx-auto my-20">
      <div className="card lg:card-side">
        <figure className="w-5/12">
          <img
            src={toyUrl}
          />
          
        </figure>
        <div className="card-body w-7/12 flex flex-col ">
          
          <h2 className="card-title text-4xl">{toyName}</h2>
          <div>
        <ReactStars
          size={20}
          value={rating}
          edit={false}
          ></ReactStars></div>
          <p className="tracking-wider mb-10">{description}</p>
          <div className="flex">
            <div className="w-3/12 font-bold text-xl flex flex-col gap-8">
                <p>Price:</p>
                <p>Available qty:</p>
                <p>Seller Name:</p>
                <p>Seller Email:</p>
            </div>
            <div className="font-bold text-xl flex flex-col gap-8">
            <p>$ {price}</p>
                <p>{qty}</p>
                <p>{sellerName}</p>
                <p>{email}</p>
            </div>
          </div>

          <Link to='/allToys'><button className="btn primary-bg-color border-0 mt-10">Back To AllToys Page</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
