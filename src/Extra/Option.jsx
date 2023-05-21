import { FaTimesCircle, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Option = ({myToy, handleDelete}) => {
    
    return (
        <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <button onClick={() => handleDelete(myToy._id)}><FaTimesCircle className='text-red-600 text-xl'></FaTimesCircle></button>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={myToy.toyUrl}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{myToy.toyName}</div>
                  </div>
                </div>
              </td>
              <td>
                {myToy.price}
                
              </td>
              <td>{myToy.qty}</td>
              <td>{myToy.subCategory}</td>
              <th>
                <Link to={`/update/${myToy._id}`}><button className="btn btn-ghost btn-md"><FaEdit className='text-xl text-yellow-400'></FaEdit></button></Link>
              </th>
            </tr>
            
          </tbody>
    );
};

export default Option;