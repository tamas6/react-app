import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";
// import { useLinkClickHandler } from "react-router-dom";

function App() {
	// const [alertVisible, setAlertVisibility] = useState(false);
	let items = ["New York", "Los Angeles", "San Francisco"];
	const handleSelectItem = (item: string) => {
		console.log(item);
	};
	return (
		<div>
			<ListGroup
				items={items}
				heading="Cities"
				onSelectItem={handleSelectItem}
			/>
		</div>
	);
}

export default App;
