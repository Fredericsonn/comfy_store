import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {clearCart} from "../features/cart/cartSlice";
import {logoutUser} from "../features/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";
const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const queryClient = useQueryClient();

  const handleLogout =() => {
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  }
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? <div className="flex gap-x-2 sm:gap-x-8 items-center">
          <p className="tetx-xs sm:text-sm">Hello, {user.username}</p>
          <button onClick={handleLogout} className="btn btn-xs btn-outline btn-primary uppercase">logout</button>
        </div> : (
          <div className="flex gap-x-6 items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">Sign in/Guest</Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">Create Account</Link>
          </div>
        )}
      </div>
    </header>
  )
};

export default Header;
