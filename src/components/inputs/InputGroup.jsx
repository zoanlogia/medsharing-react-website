const InputGroup = ({htmlFor, label, className, type, classLabel, classInput, placeholder, needed, value, onChange, onBlur}) => {

    return (
        <div className={className}>
            <label className={classLabel} htmlFor={htmlFor}>
                {label} 
                {needed && <span style={{color:"red"}}> * </span>}
            </label>
            <input className={classInput} type={type} id={htmlFor} name={htmlFor} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur}/>
        </div>
    );
};

export default InputGroup;
