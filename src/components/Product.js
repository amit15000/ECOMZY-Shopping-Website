import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

function Product(props) {
  const item = props.card;

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to cart");
  };
  const removeFromCart = (item) => {
    dispatch(remove(item.id));
    toast.warning("Item removed From Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
      <div>
        <p>{item.title}</p>
      </div>
      <div>
        <p>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div>
        <img src={item.image} alt="Product" />
      </div>
      <div>
        <p>{item.price}</p>
      </div>
      {cart.some((p) => p.id === item.id) ? (
        <button onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
}

export default Product;
