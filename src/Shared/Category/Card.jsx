import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const Card = ({ prod }) => {
  const { toyUrl, toyName, price, rating, _id } = prod;
  return (
    <div>
      <div className="card  shadow-xl">
        <figure>
          <img className="h-52 w-full object-cover" src={toyUrl} />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl text-center">{toyName}</h2>
          <div className="card-actions mt-6 flex justify-between">
            <div>
              <p className="font-bold">Price: ${price}</p>
              <ReactStars size={20} value={rating} edit={false}></ReactStars>
            </div>
            <Link to={`/toyDetails/${_id}`}>
              <button className="btn text-base border-0 primary-bg-color">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
