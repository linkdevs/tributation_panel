export default function FormInput({ label, type, name, controller, onChange, options, children, className, inputClassName, ...props }) {
    type = (type) ? type : 'text';

    if (!props.placeholder) props.placeholder = label;
    if (!props.autoComplete) props.autoComplete = 'off';

    const [controller_data, onChangeController] = controller;

    const dataHandler = (e) => {

        let value = e.target.value;

        if (type == 'number') value = parseFloat(value);


        if (onChangeController) onChangeController({ ...controller_data, [name]: value });
        if (onChange) onChange(e);
    };

    const formats = {};

    formats["select"] = <select className={`form-select ${inputClassName}`} name={name} id={`input_${name}`} value={controller_data[name]} onChange={dataHandler} {...props}>
        <option value="">Selecione {label}</option>
        {options && options.map((option, index) => {
            if (typeof option === "object") return <option key={index} value={option.value ?? option.label}>{option.label}</option>;
            else return <option key={index} value={option}>{option}</option>;
        })}
        {children && children}
    </select>

    formats["textarea"] = <textarea className={`form-control ${inputClassName}`} name={name} id={`input_${name}`} value={controller_data[name]} onChange={dataHandler} {...props} />

    formats["radio"] = <input className={`form-check-input ${inputClassName}`} type={type} name={name} id={`input_${name}`} value={controller_data[name]} onChange={dataHandler} {...props} />

    if (!name) return <div className={`${props.column_size ?? "col-12"}`}>{props.title && <><span className="h4">{props.title}</span><hr /></>}</div>;

    return <div className={`form-group ${className} `}>
        {(label && type != 'radio') && <label htmlFor={`input_${name}`} className={`form-label text-uppercase fw-bold`}>{label}</label>}
        {formats[type] || <input type={type} className={`form-control ${inputClassName}`} name={name} id={`input_${name}`} value={controller_data[name] ?? ""} onChange={dataHandler} {...props} />}
        {(label && type === 'radio') && <label htmlFor={`input_${name}`} className={`form-label  fw-bold ms-2`}>{label}</label>}

    </div>
}