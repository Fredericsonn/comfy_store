
const FormCheckbox = (props) => {
  const {label, name, defaultChecked, size} = props;
  return (
    <div className="form-control items-center">
        <label htmlFor={name} className="label cursor-pointer">
            <span className="label-text capitalize">{label}</span>
        </label>
        <input type="checkbox" 
               id={name}
               name={name}
               defaultChecked={defaultChecked}
               className={`checkbox checkbox-primary ${size}`} 
        />
    </div>
  )
}

export default FormCheckbox