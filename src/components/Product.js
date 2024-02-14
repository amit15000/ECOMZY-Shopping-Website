import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

function Product(props) {
  const item = props.card;

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to cart");
  };
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.warning("Item removed From Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 rounded-xl  transition outline duration-300 ease-in hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  gap-3 p-4 mt-10">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {item.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[12px] text-left">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className=" h-[180px]">
        <img className="w-full h-full" src={item.image} alt="Product" />
      </div>
      <div className="flex justify-between w-full">
        <p className="text-green-600 font-semibold">${item.price}</p>
        {cart.some((p) => p.id === item.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[14px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in "
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[14px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in "
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>{" "}
    </div>
  );
}

export default Product;
