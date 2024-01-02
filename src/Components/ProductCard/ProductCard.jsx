import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseCart from "../../Hooks/UseCart";
import Swal from "sweetalert2";

const ProductCard = ({ item }) => {
  const { user } = UseAuth();
  const { title, image, price, description, _id,unit_quantity } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = UseCart();
  const handleAddToCart =()=>{
    // console.log(food,user.email);
    if (user && user.email) {
      //  send cart item to the database 
      
      const cartItem = {
        productId:_id,
        email:user.email,
        title,
        image,
        price
      }
      axiosSecure.post('/carts',cartItem)
      .then(res=>{
        console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${title} has been added to the cart`,
            showConfirmButton: false,
            timer: 1500
          });
          //refetch cart to update the cart items count
          refetch();
        }
      });

    }
    else{
      Swal.fire({
        title: "You are not logged In?",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
        //TODO: send the user to the login page 
        navigate('/login',{state:{from:location}})
        }
      });
    }
}
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img className="w-full h-[260px] rounded hover:scale-110 transition-all duration-300" src={image} alt="Shoes" /></figure>
    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
    <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {/* <p>Price: <span className="font-bold text-red-500">{price}rm</span></p> */}
        <div className="flex w-full justify-end">
          <p>Unit: <span className="font-bold text-green-600">{unit_quantity}</span></p>
         <span className="text-green-600"> <p>Available</p></span>
        </div>
        <div className="card-actions justify-end">
            <button
            onClick={handleAddToCart} 
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">
                Add to Cart</button>
        </div>
    </div>
</div>
  );
};

export default ProductCard;
