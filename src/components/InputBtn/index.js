function InputBtn({ type = '+', onClick = () => { console.log('Default Onclick') } }) {

    const isPositive = type === '+';

    return (
        <button onClick={onClick} >
            <span style={isPositive ? null : { display: 'block', position: 'relative', top: '-4px' }}>
                {isPositive ? '+' : '-'}
            </span>
        </button>
    )
}

export default InputBtn;

