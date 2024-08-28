import React from 'react'

const FormInput = (props) => {
    const {label, name, type, placeholder, defaultValue, size, required} = props;

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text capitalize">{label}</span>
            </div>
            <input type={type} 
                   placeholder={placeholder} 
                   name={name} 
                   className={`input input-bordered ${size}`} 
                   defaultValue={defaultValue}
                   required={required}/>
        </label>
    )
}

export default FormInput;