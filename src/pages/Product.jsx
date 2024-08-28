import { useLoaderData } from 'react-router-dom';
import client from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const productQuery = (id) => {
  return {
    queryKey: [`product ${id}`],
    queryFn: () => client.get(`/products/${id}`)
  }
}
export const loader = (queryClient) => async ({params}) => {
  const response = await queryClient.ensureQueryData(productQuery(params.id));
  const product = response.data.data;
  return product;
}

const amounts = [1,2,3,4,5,10,15,20];

const Product = () => {
  const product = useLoaderData();
  const {image,title,price,company,colors,description} = product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const cartItem = {
    itemId: product.id + productColor,
    productId: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount
  }

  const handleAmount = (e) => {
    setAmount(e.target.value);
  }

  const addItemToCart = () => {    
    dispatch(addItem(cartItem));
  }

    return (
      <section>
        <div className="text-md breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        <div className='grid lg:grid-cols-2 mt-6 gap-y-8 lg:gap-x-16' >
          <img src={image} alt={title} className='rounded-lg w-96 h-96 lg:w-full object-cover'></img>
          {/*PRODUCT INFO*/ }
          <div>
            <h1 className='capitalize text-3xl font-bold'>{title}</h1>
            <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>
            <p className='text-xl mt-3'>${price/100}</p>
            <p className='mt-6 leading-8'>{description}</p>
            {/*COLORS*/ }
            <div className='mt-6'>
              <h4 className='text-md font-medium tracking-wider'>Colors</h4>
              <div className="mt-2">
                {colors.map((color) => {
                  return (
                    <button key={color} type='button' 
                      className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2 border-secondary'}`} 
                      style={{backgroundColor: color}}
                      onClick={() => setProductColor(color)}></button>
                  )
                })}
              </div>
            </div>
            {/*AMOUNT*/}
            <div className='form-control w-full max-w-xs'>
              <label className='label' htmlFor='amount'>
                <h4 className='text-md font-medium tracking-wider'>Amount</h4>
              </label>
              <select id='amount' 
                      value={amount}
                      onChange={handleAmount}
                      className='select select-secondary select-bordered select-md'>
                        {
                          amounts.map((amnt) => {
                            return <option key={amnt} value={amnt}>{amnt}</option>
                          })
                        }
              </select>
            </div>
            {/* CART BTN */}
            <div className='mt-4'>
              <button className='btn btn-secondary btn-md' onClick={() => addItemToCart()}>ADD TO CART</button>
            </div>
          </div>
        </div>
      </section>
    )
  };

export default Product;