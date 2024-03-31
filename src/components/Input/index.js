function Input({ id, min, step, initValue, onChange, placeholderValue }) {

    return (
        <input
            type="number"
            id={id}
            min={min}
            step={step}
            value={initValue}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholderValue}
        />
    );
};

export default Input;
