import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddNewToy = () => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState('');
  const[subCategory, setSubCategory] = useState('');
  const [rating, setRating] = useState(0);
  
  const options = [
    {
        'category': "5 to 7 Years",
        'onesubCategory': [
            "Geometric Shape Toy",
            "Plastic Robert",
            "Shape Puzzles",
        ]
    },
    {
        'category': "8 to 13 Years",
        'twosubCategory': [
            "Toy Blocks",
            "Toy House",
            "Wood Block Tower",
        ]
    },
    {
        'category': "14 Years or Above",
        'threesubCategory': [
            "Air craft",
            "Civil Engineering",
            "Lego Toys",
        ]
    },
    
    
   
  ];
  const ratings = [1, 2, 3, 4, 5];
  const cat1 = "5 to 7 Years";
  const cat2 = "8 to 13 Years";
  const cat3 = "14 Years or Above";
  const handleAddNewToy = e => {
    e.preventDefault()
    const form = e.target;
    const toyName = form.toyName.value;
    const name = user?.displayName;
    const photo = form.photo.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const email = user?.email;
    const rat = rating;
    const cat = value;
    const subCat = subCategory;
    
    const toys = {
        toyName: toyName,
        sellerName: name,
        toyUrl: photo,
        price,
        qty:quantity,
        sellerEmail: email,
        rating:rat,
        category:cat,
        subCategory: subCat
    }
    fetch('http://localhost:5000/alltoys',{
        method:"POST",
        headers:{
            'content-type': "application/json"
        },
        body: JSON.stringify(toys)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.insertedId) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Added a toy',
                showConfirmButton: false,
                timer: 1500
            })
        }
    })
  }



//  Options work 
const handleCategory = e => {
    const val = e.target.value;
    setValue(val)
}
const handleSubCategory = e => {
    const subCat = e.target.value;
    setSubCategory(subCat)
}
const handleRatings = e => {
    const rat = e.target.value;
    setRating(rat);
}
  return (
    <div className="w-8/12 mx-auto my-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">Add new toys</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <form onSubmit={handleAddNewToy} className="border border-slate-200 p-8 rounded-md shadow-2xl">
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 mb-5">
          <div className="form-control w-6/12">
            <label className="label">
              <span className="label-text">Toy name</span>
            </label>
            <input
              type="text"
              placeholder="Toy name"
              name="toyName"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-6/12">
            <label className="label">
              <span className="label-text">Seller name</span>
            </label>
            <input
              type="text"
              placeholder="Seller Name"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 mb-5">
          <div className="form-control w-6/12">
            <label className="label">
              <span className="label-text">Product photo url</span>
            </label>
            <input
              type="text"
              placeholder="Photo url"
              name="photo"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-3/12">
            <label className="label">
              <span className="label-text">Product Price $</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-3/12">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Quantity"
              name="quantity"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 mb-5">
          <div className="form-control w-6/12">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div className="form-control w-6/12">
            <label className="label">
              <span className="label-text">Product Rating</span>
            </label>
            <select onChange={handleRatings} className="select w-full input input-bordered">
              <option>Chose Ratings</option>
              {ratings.map((rating, index) => {
                return <option key={index}>{rating}</option>;
              })}
            </select>
          </div>
          
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 mb-5">
        <div className="form-control w-6/12">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select onChange={handleCategory} className="select w-full input input-bordered">
              <option>Pick your category</option>
              {
                options.map((option, index) => {
                    return <option key={index}>{option.category}</option>
                })
              }
            </select>
            
          </div>
        {
            value === cat1 ? <div className="form-control w-6/12">
            <label className="label">
              <span className="label-text">Sub category</span>
            </label>
            <select onChange={handleSubCategory} className="select w-full input input-bordered">
              <option>Select sub category</option>
              {options[0].onesubCategory.map((sub, index) => {
                return <option key={index} >{sub}</option>;
              })}
            </select>
          </div> : " "
        }
        {
            value === cat2 ? <div className="form-control w-6/12">
            <label className="label">
              <span className="label-text">Sub category</span>
            </label>
            <select onChange={handleSubCategory} className="select w-full input input-bordered">
              <option>Select sub category</option>
              {options[1].twosubCategory.map((sub, index) => {
                return <option key={index}>{sub}</option>;
              })}
            </select>
          </div> : " "
        }
        {
            value === cat3 ? <div className="form-control w-6/12">
            <label className="label">
              <span className="label-text">Sub category</span>
            </label>
            <select onChange={handleSubCategory} className="select w-full input input-bordered">
              <option>Select sub category</option>
              {options[2].threesubCategory.map((sub, index) => {
                return <option key={index}>{sub}</option>;
              })}
            </select>
          </div> : " "
        }
        </div>
        <div className="flex">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Details</span>
            </label>
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Add New Toy"
            className="btn primary-bg-color border-0"
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewToy;
