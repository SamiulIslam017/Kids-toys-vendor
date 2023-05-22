import { useEffect, useState } from "react";
import AllToysTable from "../Extra/AllToysTable";


const AllToys = () => {
    const [toys, setToys] = useState([])
    useEffect(()=>{
        fetch('https://kids-toy-vendor-server-samiulislam017.vercel.app/alltoys')
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    },[])
    return (
        <div className="w-10/12 mx-auto my-20">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Seller Name</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Details</th>
              </tr>
            </thead>
            {
              toys.map((toy,index) => <AllToysTable key={index} toy={toy}></AllToysTable>)
            }
          </table>
        </div>
      </div>
    );
};

export default AllToys;