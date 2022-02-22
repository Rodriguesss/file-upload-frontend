import { useForm } from "react-hook-form"

import { uploadFile, uploadFiles } from "../../services/services"

import { HomeStyle, Title, Form, Input, ButtonInput, Label, InputLabelStyle } from "./style"

export default function Home() {
	const { register, handleSubmit } = useForm()

	async function onSubmit({ name, file }) {
		const formData = new FormData()
		let promise = null
		
		console.log(file)

		formData.append('name', name)

		if (file.length > 1) {
			for (let i = 0; i < file.length; i++) {
				formData.append('file', file[i])
			}

			promise = await uploadFiles(formData)
		} else {
			formData.append('file', file[0])

			promise = await uploadFile(formData)
		}

		console.log(promise)
	}

	return (
		<HomeStyle>
			<Title>UPLOAD DE ARQUIVO</Title>
			<Form onSubmit={handleSubmit((data) => onSubmit(data))} enctype="multipart/form-data">
				<InputLabelStyle>
					<Label>Informe seu nome</Label>
					<Input {...register("name")} type="text" placeholder="Nome" />
				</InputLabelStyle>

				<InputLabelStyle>
					<Label>Escolha uma imagem</Label>
					<Input {...register("file")} name="file" accept=".jpg" type="file" placeholder="Imagem" multiple />
				</InputLabelStyle>

				<ButtonInput type="submit" value="UPLOAD" />
			</Form>
		</HomeStyle>
	)
}