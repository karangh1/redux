import CartContainer from "./component/CartContainer";
import Navbar from "./component/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calTotal } from "./features/cart/cartSlice";

function App() {
  const { cartItems }= useSelector((state)=>state.cart)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(calTotal())
  },[cartItems])
  return (
     <main>
        <Navbar/>
        <CartContainer/>
     </main>
  );
}
export default App;
