import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import client from "../utils";
import { toast } from "react-toastify";


export const action = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await client.post('/auth/local/register', data);
    toast.success('Account created successfully');
    return redirect('/login');
  } catch (error) {
    const errorMesssage = error?.response?.data?.error?.message || 'please double check your credentials';
    toast.error(errorMesssage);
    return null;
  }
}
const Register = () => {

  return (
    <section className="h-screen grid place-items-center">
      <Form method="post" className="card w-96 bg-base-100 shadow-lg flex flex-col p-8 gap-y-4">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="Username" name="username" placeholder="username" />
        <FormInput type="email" label="Email" name="email" placeholder="test@test.com" />
        <FormInput type="password" label="Password" name="password" placeholder="********" />

        <div className="mt-4">
          <SubmitBtn text="REGISTER" />
        </div>
        <p className="text-center">Already a member?<Link to="/login"
          className="ml-2 link link-hover link-primary">Login</Link></p>
      </Form>
    </section>
  )
};

export default Register;