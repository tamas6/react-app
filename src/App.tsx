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

/* import React, { useState } from "react";
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
