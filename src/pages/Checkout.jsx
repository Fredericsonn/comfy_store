import React from "react";
import { CartTotals, FormInput, SectionTitle, CheckoutForm } from "../components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  
  if (!user) {
    toast.warn('you must be logged in to checkout');
    return redirect('/login');
  }

  return null;
}
const Checkout = () => {
  const total = useSelector((state) => state.cartState.totalItems);

  if (total === 0) {
    return (
      <SectionTitle text='Your cart is empty' />
    )
  }
  return <>
    <SectionTitle text='Place your order' />
    <div className="grid lg:grid-cols-2 max-sm:grid gap-8 mt-8 items-start">
      <CheckoutForm />
      <CartTotals />
    </div>

  </>
};

export default Checkout;