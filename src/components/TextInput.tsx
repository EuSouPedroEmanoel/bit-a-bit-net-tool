interface TextInputProps {
    className?: string;
    type?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
}

export default function TextInput({ className = "input-text", type = "text", placeholder = "Digite um ip", onChange = () => { }, value = "", name = "ip" }: TextInputProps) {
    return (
        <input
            type={type}
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder}
            className={className}
        />
    )
}