import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import client from '../utils';
import { ComplexPagination, OrdersList, SectionTitle } from '../components';

const ordersQuery = (params, user) => {
  return {
    queryKey: ['orders', user.username, params.page ? parseInt(params.page) : 1],
    queryFn: () => 
      client.get('/orders', {params,
        headers: {
        Authorization: `Bearer ${user.token}`
      }})
  }
}
export const loader = (store, queryClient) => async ({request}) => {
    const user = store.getState().userState.user;
    

    if (!user) {
      toast.warn('You must be logged in to view orders');
      return redirect('/login');
    }

    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    
    try {
      const response = await queryClient.ensureQueryData(ordersQuery(params, user));
      
      return {orders: response.data.data, meta: response.data.meta};

    } catch (error) {
      const errorMesssage = error?.response?.data?.error?.message || 'there was an error placing your order';
      toast.error(errorMesssage);

      if (error?.response?.status === 401 || 403) return redirect('/login');
      return null;
    }
}

const Orders = () => {
    const {meta} = useLoaderData();
    if (meta.pagination.total < 1) {
      return <SectionTitle text='You have not made any orders yet' />
    }
    return (
      <>
        <SectionTitle text='Your orders' />
        <OrdersList />
        <ComplexPagination />
      </>
    )
  };

export default Orders;