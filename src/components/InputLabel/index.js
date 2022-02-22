import { InputLabelStyle, Label, Input } from "./style"

export default function InputLabel({label, name, accept, register, typeRegister, type, placeholder, multiple}) {
	return (
		<InputLabelStyle>
			<Label>{label}</Label>
			<Input {...register(typeRegister)} name={name} accept={accept} type={type} placeholder={placeholder} multiple={multiple} />
		</InputLabelStyle>
	)
}