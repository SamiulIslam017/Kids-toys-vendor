import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Option from "../Extra/Option";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";
import { useNavigate } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setMyToys] = useState([]);
  const navigate= useNavigate();
  useTitle('My Toys')
  const url = `https://kids-toy-vendor-server.vercel.app/alltoys?email=${user?.email}`;

  useEffect(() => {
    fetch(url,{
      method:"GET",
      headers:{
        authorization: `Bearer ${localStorage.getItem('toy-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
          setMyToys(data);
        }else{
          
          navigate('/');
        }
        
      });
  }, [url,navigate]);


//   delete function
  const handleDelete = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FEBF00',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          
          fetch(`https://kids-toy-vendor-server.vercel.app/alltoys/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            
            if (data.deletedCount > 0) {
                Swal.fire(
                    'Deleted!',
                    'Your Product has been deleted.',
                    'success'
                  )
                const remaining = mytoys.filter(toy => toy._id !== id);
                setMyToys(remaining);
            }
        })
        }
      })
        
    }

// update function
  return (
    <div className="w-10/12 mx-auto my-20">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                Delete
              </th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Update</th>
            </tr>
          </thead>
          {
            mytoys.map((myToy,index) => <Option key={index} handleDelete={handleDelete} myToy={myToy}></Option>)
          }
          
        </table>
      </div>
    </div>
  );
};

export default MyToys;
