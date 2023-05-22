import { Link } from "react-router-dom";


const AllToysTable = ({toy}) => {
    return (
        <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={toy.toyUrl}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{toy.toyName}</div>
                  </div>
                </div>
              </td>
              <td>
                {toy.price}
                
              </td>
              <td>{toy.sellerName}</td>
              <td>{toy.qty}</td>
              <td>{toy.subCategory}</td>
              <td>
                <Link to={`/toyDetails/${toy._id}`}><button className="btn primary-bg-color border-0">View Details</button></Link>
              </td>
              
              
            </tr>
            
          </tbody>
    );
};

export default AllToysTable;
