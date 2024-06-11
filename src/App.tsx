import { useState } from "react";
import produce from "immer";
function App() {
	const [bugs, setBugs] = useState([
		{ id: 1, title: "Bug 1", fixed: false },
		{ id: 2, title: "Bug 2", fixed: false },
	]);
	const handleClick = () => {
		// setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true }
		setBugs(
			produce((draft) => {
				const bug = draft.find((bug) => bug.id === 1);
				if (bug) bug.fixed = true;
			})
		);
	};

	return (
		<div>
			{bugs.map((bug) => (
				<p key={bug.id}>
					{bug.title} {bug.fixed ? "Fixed" : "New"}
				</p>
			))}
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
}

export default App;

/*
import { useState } from "react";
import { Button } from "./components/Button/Button";
function App() {
	const [drink, setDrink] = useState({
		title: "Americano",
		price: 5,
	});

	const handleClick = () => {
		setDrink({ ...drink, price: 6 });
		console.log("clicked", `${drink.price}`);
	};
	return (
		<div>
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
}

export default App;
/// Managing component state

import { useState } from "react";
function App() {
	const [person, setPerson] = useState({
		firstName: "",
		lastName: "",
	});
	const [isLoading, setLoading] = useState(false);

	return <div>{fullName}</div>;
}

export default App;

// Practices

 import React, { useState } from "react";
import { Button } from "./components/Button/Button";
import styles from "./App.css";
import Like from "./Like";

// import { useLinkClickHandler } from "react-router-dom";

function App() {
	const [alertVisible, setAlertVisibility] = useState(false);
	const handleClick = () => {
		setAlertVisibility(true);
		// setName ('Mosh')
		console.log(alertVisible);
	};
	let items = ["New York", "Los Angeles", "San Francisco"];
	const handleSelectItem = (item: string) => {
		console.log(item);
	};
	return (
		<>
			<div>
				<Like onClick={handleClick} />
			</div>
		</>
	);
}

export default App;
*/
