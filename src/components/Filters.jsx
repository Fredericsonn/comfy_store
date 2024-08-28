import {Form, useLoaderData, Link} from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const {meta, params} = useLoaderData();
  const {search, company, category, order, price, shipping} = params;
  return (
    <Form className="bg-base-300 rounded-md grid px-8 py-4 gap-x-4 gap-y-8
    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput type="search" 
                 label="search product" 
                 placeholder="product name" 
                 name="search" 
                 size="input-sm"
                 defaultValue={search}
      />   

      {/* CATEGORIES */}
      <FormSelect label="select category" 
                  name="category"
                  list={meta.categories}
                  size="select-sm"
                  defaultValue={category}
      />

      {/* COMPANIES */}
      <FormSelect label="select company" 
                  name="company"
                  list={meta.companies}
                  size="select-sm"
                  defaultValue={company}
      />

      {/* SORT */}
      <FormSelect label="sort by" 
                  name="order"
                  list={["a-z","z-a","high","low"]}
                  size="select-sm"
                  defaultValue={order}
      />

      {/* PRICE */}
      <FormRange name="price" 
                 label="select price" 
                 size="ramnge-sm"
                 price={price}
      />

      {/* CHEKCBOX */}
      <FormCheckbox name='shipping' 
                    label='free shipping' 
                    size='checkbox-sm'
                    defaultChecked={shipping}
      />

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm uppercase">search</button>
      <Link to='/products' className="btn btn-accent btn-sm uppercase">reset</Link>
    </Form>
  )
}

export default Filters