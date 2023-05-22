import { useEffect, useState } from "react";
import AllToysTable from "../Extra/AllToysTable";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [toyPerPage,setToyPerPage] = useState(5);
  const { totalToys } = useLoaderData();
  const totalPages = Math.ceil(totalToys / toyPerPage);

  const pageNumbers = [...Array(totalPages).keys()];
  useEffect(() => {
    async function fetchData (){
      const response = await fetch(`https://kids-toy-vendor-server.vercel.app/alltoys?page=${currentPage}&limit=${toyPerPage}`)
      const data = await response.json();
      setToys(data);
    }
    fetchData();
  }, [currentPage,toyPerPage]);
  const options = [5,10,15];
  function handleSelectChange(event) {
    setToyPerPage(parseInt(event.target.value));
    setCurrentPage(0)
  }
  
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
          {toys.map((toy, index) => (
            <AllToysTable key={index} toy={toy}></AllToysTable>
          ))}
        </table>
      </div>
      {/* pagination */}
      <div className="flex flex-col justify-center items-center mt-8">
        <p>Current Page Number: {currentPage}</p>
        <div className="btn-group">
          
        {pageNumbers.map((number) => (
          <button 
          onClick={() => setCurrentPage(number)} 
          key={number} 
          className={currentPage === number ? "primary-bg-color border-0 btn" : "btn"}>{number}</button>
        ))}
        <select className="border border-slate-200 px-3 rounded-md" value={toyPerPage} onChange={handleSelectChange}>
          {
            options.map(option => {
              return <option key={option} value={option}>
                {option}
              </option>
            })
          }
        </select>
          
        </div>
      </div>
    </div>
  );
};

export default AllToys;
