import { useSelector } from 'react-redux';
import { CartContainer, SectionTitle, CartTotals } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {

  const user = useSelector((state) => state.userState.user);

  const totalItems = useSelector((state) => state.cartState.totalItems);

  if (totalItems === 0) {
    return <SectionTitle text="Your cart is empty" />
  }
  return (
    <>
      <SectionTitle text='Shopping Cart' />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartContainer />
        </div>
        <div className="lg:col-span-4 lg:pd-4">
          <CartTotals />
          {user ? <Link to='/checkout' className='btn btn-primary btn-block mt-8 uppercase'>proceed to checkout</Link>
          : <Link to='/login' className='btn btn-primary btn-block mt-8 uppercase'>please login</Link> }
        </div>
      </div>
    </>
  )
};

export default Cart;