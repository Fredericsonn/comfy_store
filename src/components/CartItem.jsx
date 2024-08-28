import { formatPrice} from '../utils';
import { removeItem, editItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const amounts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const CartItem = (props) => {
  const {itemId, image, title, company, productColor, amount, price} = props;
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeItem({itemId, amount, price}));
  }
  const handleAmount = (e) => {
    dispatch(editItem({itemId, amount: parseInt(e.target.value)}));
  }

  return (
      <article key={itemId} className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b-[2px] border-base-300 pb-6 last:border-none'>
        {/* IMAGE */}
        <img src={image} alt={title} 
        className='h-32 w-32 rounded-lg max-sm:h-24 sm:24 object-cover' />

        {/* INFO */}
        <div className='sm:ml-16 w-48'>
          {/* TITLE */}
          <h3 className='capitalize font-medium'>{title}</h3>
          {/* COMPANY */}
          <h4 className='mt-2 capitalize text-sm text-neutral-content'>{company}</h4>
          {/* COMPANY */}
          <p className='mt-4 textsm capitalize flex items-center gap-x-2'>
            color : 
            <span className='badge badge-sm' style={{backgroundColor: productColor}}></span>
        </p>
        </div>
        {/* AMOUNT */}
        <div className='ml-12'>
          <div className="form-control max-w-xs">
            <label htmlFor="amount" className='label p-0'>
              <span className='label-text'>Amount</span>
            </label>
            <select name="amount" 
                    id="amount" 
                    value={amount}
                    onChange={(e) => handleAmount(e)}
                    className='mt-2 select select-base select-bordered select-xs'>
              {amounts.map((amnt) => {
                            return <option key={amnt} value={amnt}>{amnt}</option>}
              )}
            </select>
          </div>
        {/* REMOVE */}
        <div>
          <button className='mt-2 link link-primary link-hover text-sm' onClick={remove}>remove</button>
        </div>
        </div>
        {/* PRICE */}
        <p className='font-medium ml-auto'>{formatPrice(price)}</p>
      </article>
  )
}

export default CartItem