import Input from '../Input';
import InputBtn from '../InputBtn';

function InputBlock({ labelFor, labelTxt, inputMin, inputStep, initValue, inputOnChange, placeholderValue }) {
    const inputId = labelFor;

    const decrease = Number(initValue) - Number(inputStep) > Number(inputMin)? Number(initValue) - Number(inputStep) : (inputMin);
    const increase = Number(initValue) + Number(inputStep);

    return (
        <div className="rate-input">
            <label htmlFor={labelFor}>{labelTxt}</label>
            <div className="input-container">
                <InputBtn type="-" onClick={() => inputOnChange(decrease)} />
                <Input
                    id={inputId}
                    min={inputMin}
                    step={inputStep}
                    initValue={initValue}
                    onChange={inputOnChange}
                    placeholderValue={placeholderValue}
                />
                <InputBtn onClick={() => inputOnChange(increase)} />
            </div>
        </div>
    );
};

export default InputBlock;
