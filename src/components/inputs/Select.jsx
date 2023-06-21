import { useState } from "react";

const Select = ({htmlFor, label, className, type, classLabel, classInput, placeholder, needed, value, onChange, onBlur, options}) => {

    const [isNeeded, setIsNeeded] = useState(!!needed)

    return (
        <div className={className}>
            <label className={classLabel} htmlFor={htmlFor}>{label} {isNeeded && <span style={{color:"red"}}> * </span>}</label>
            <select className={classInput} type={type} id={htmlFor} name={htmlFor} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur}>
            {options.map((option) => (
                <option key={option.value} value={option.value} className="option-item">{option.label}</option>
            ))}
            </select>
        </div>
    );
};

export default Select;
