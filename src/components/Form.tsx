import React, { FormEvent, useState } from "react";

const Form = () => {
	const [person, setPerson] = useState({
		name: "",
		age: 0,
	});
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(person);
	};
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
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					onChange={(event) =>
						setPerson({ ...person, name: event.target.value })
					}
					value={person.name}
					id="name"
					type="text"
					className="form-control"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					onChange={(event) =>
						setPerson({ ...person, age: parseInt(event.target.value, 10) })
					}
					value={person.age}
					id="age"
					type="number"
					className="form-control"
				/>
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};

export default Form;
