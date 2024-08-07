import React, { FormEvent, useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import ButtonCustomExample from "./DropdownButton";

///  Controlled Components l51

interface FormData {
	name: string;
	age: number;
	category: string;
}

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FieldValues) => console.log(data);

	/*
// Accessing input fields
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);
	const person = { name: "", age: 0 };

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		if (nameRef.current?.value) person.name = nameRef.current.value;
		if (ageRef.current?.value) person.age = parseInt(ageRef.current.value, 10);

		if (person.name || person.age) console.log(person);

		};
	*/

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<label htmlFor="name" className="form-label">
					Description
				</label>

				<input
					{...register("name", { required: true, minLength: 3, maxLength: 6 })}
					id="name"
					type="text"
					className="form-control"
				/>
				{errors.name?.type === "required" && (
					<p className="text-danger">The namefield is required</p>
				)}
				{errors.name?.type === "minLength" && (
					<p className="text-danger">The name must be at least 3 characters</p>
				)}
			</div>
			<div className="mx-auto">
				<label htmlFor="age" className="form-label">
					Amount
				</label>
				<input
					{...register("age")}
					id="age"
					type="number"
					className="form-control"
				/>
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>

			<div className="dropdown">
				<select>
					<option value="0" />
					<option value="1">Groceries</option>
					<option value="2">Utilities</option>
					<option value="2">Entertainment</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
