import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import client  from '../utils/';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';



export const action = (store) => async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await client.post('/auth/local', data);
    store.dispatch(loginUser(response.data));
    toast.success('Logged in successfully');
    return redirect('/');
  } catch (error) {
    const errorMesssage = error?.response?.data?.error?.message || 'please double check your credentials';
    toast.error(errorMesssage);
    return null;
  }
  
}

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const loggingInAsGuestUser = async() => {
      const response = await client.post('auth/local', {
        identifier: 'test@test.com',
        password: 'secret'
      });

      dispatch(loginUser(response.data));
      toast.success('Welcome back, ghost user');
      navigate('/');
    }
    return (
      <section className="h-screen grid place-items-center">
        <Form method="post" className="card w-96 bg-base-100 shadow-lg flex flex-col p-8 gap-y-4">
          <h4 className="text-center text-3xl font-bold">Login</h4>
          <FormInput type="email" label="Email" name="identifier" placeholder="test@test.com"/>
          <FormInput type="password" label="Password" name="password" placeholder="********"/>
          <div className="mt-4">
          <SubmitBtn text="LOGIN"/>
          </div>
          <button type="button" className="btn btn-secondary btn-block uppercase" onClick={loggingInAsGuestUser}>guest user</button>
          <p className="text-center">Not a member yet? <Link to="/register" 
          className="ml-2 link link-hover link-primary">Register</Link></p>
        </Form>
      </section>
    )
  };

export default Login;