import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import Navlinks from "./NavLinks";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';



const NavBar = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  }

  const itemsTotal = useSelector((state) => state.cartState.totalItems);
  const isLoggedIn = useSelector((state) => state.userState.isLogged)

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className="navbar-start">
        <NavLink to='/' className='flex max-sm-2:hidden btn btn-primary text-3xl items-center'>C</NavLink>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost sm-2:hidden'>
            <FaBarsStaggered className='h-6 w-6' />
          </label>
          <ul className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-200 drop-ver rounded-box w-40'><Navlinks /></ul>
        </div>
        </div>
        <div className="navbar-center">
          <ul className='menu menu-horizontal flex max-sm-2:hidden nav-hor'><Navlinks /></ul>
        </div>
        <div className="navbar-end">
          {/* THEME */ }
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />
              <BsSunFill className='swap-on h-4 w-4' />
              <BsMoonFill className='swap-off h-4 w-4' />
          </label>
          {/* CART */ }
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className='h-6 w-6'/>
              <span className='badge badge-sm badge-primary indicator-item'>{itemsTotal}</span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;