import { useLoaderData, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateRoute = () => {
    const navigate = useNavigate();
  const updateToys = useLoaderData();
  const { toyName, price, qty, description, _id } = updateToys;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const qty = form.qty.value;
    const description = form.description.value;

    const updatedToys = { price, qty, description };

    fetch(`https://kids-toy-vendor-server.vercel.app/alltoys/${_id}`, {
        method:'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(updatedToys)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully updated a toy',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/myToys');
        }
    })
  };
  return (
    <div className="w-8/12 mx-auto my-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">
          Update <span className="custom-color">{toyName}</span> toys
        </h1>
      </div>
      <form
        onSubmit={handleUpdate}
        className="border border-slate-200 p-8 rounded-md shadow-2xl"
      >
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 mb-5">
          <div className="form-control w-6/12">
            <label className="label">
              <span className="label-text">Product Price $</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered"
              defaultValue={price}
            />
          </div>
          <div className="form-control w-6/12">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Quantity"
              name="qty"
              className="input input-bordered"
              defaultValue={qty}
            />
          </div>
        </div>
        <div className="flex">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Details</span>
            </label>
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-lg w-full "
              name="description"
              defaultValue={description}
            ></textarea>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Update"
            className="btn primary-bg-color border-0"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateRoute;
