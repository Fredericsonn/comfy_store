import FormInput from "./FormInput";
import { Form, redirect } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";
import client, { formatPrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

export const action = (store, queryClient) => async ({request}) => {
    const formData = await request.formData();
    const {name, address} = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    console.log(user);
    

    const {cartItems, orderTotal, totalItems} = store.getState().cartState;
    
    const info = {
        name, 
        address,
        chargeTotal: orderTotal,
        orderTotal:formatPrice(orderTotal),
        cartItems,
        numItemsInCart:totalItems
    }

    try {
        const response = await client.post(
            '/orders',
            { data: info },
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
        
        queryClient.removeQueries(['orders']);
        store.dispatch(clearCart());
        toast.success('order placed successfully');
        return redirect('/orders');

    } catch (error) {
        console.log(error);
        const errorMesssage = error?.response?.data?.error?.message || 'there was an error placing your order';
        toast.error(errorMesssage);

        if (error?.response?.status === 401 || 403) return redirect('/login');
        return null;
    }
    
    return null;
}
const CheckoutForm = () => {
    return (
        <Form method="POST" className="flex flex-col gap-y-4">
            <h4 className="font-medium text-xl capitalize">shiping information</h4>
            <FormInput label='first name' name='name' type='text' required={true} />
            <FormInput label='address' name='address' type='text' required={true} />
            <div className="mt-4">
                <SubmitBtn text='place your order'/>
            </div>
        </Form>
    )
}

export default CheckoutForm;