

export default function InputGroup({label, type}) {
    return(
        <span>
        <label>{label}</label>
        <input type={type} />
        </span>
    );
}