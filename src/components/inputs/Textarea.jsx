import { useState } from "react";

const Textarea = ({htmlFor, label, className, type, classLabel, classInput, placeholder, needed, value, onChange, onBlur}) => {

    const [isNeeded, setIsNeeded] = useState(!!needed)

    const handleBlur = (event) => {
        onBlur && onBlur(event);
        setIsNeeded(!!needed);
    }

    return (
        <div className={className}>
            <label className={classLabel} htmlFor={htmlFor}>{label} {isNeeded && <span style={{color:"red"}}> * </span>}</label>
            <textarea className={classInput} type={type} id={htmlFor} name={htmlFor} placeholder={placeholder} value={value} onChange={onChange} onBlur={handleBlur}/>
        </div>
    );
};

export default Textarea;
