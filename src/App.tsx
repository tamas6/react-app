import ExpandableText from "./components/ExpandableText";

export const App = () => {
	return (
		<div>
			<ExpandableText>
				MIT License Copyright (c) 2024 tamas6 Permission is hereby granted, free
				of charge, to any person obtaining a copy of this software and
				associated documentation files (the "Software"), to deal in the Software
				without restriction, including without limitation the rights to use,
				copy, modify, merge, publish, distribute, sublicense, and/or sell copies
				of the Software, and to permit persons to whom the Software is furnished
				to do so, subject to the following conditions: The above copyright
				notice and this permission notice shall be included in all copies or
				substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS",
				WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
				LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
				PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
				HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
				AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
				CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
				SOFTWARE.
			</ExpandableText>
		</div>
	);
};

export default App;

/*
import React, { useState } from "react";
// import produce from "immer";

export const App = () => {
	const [game, setGame] = useState([
		{
			id: 1,
			player: {
				name: "John",
			},
		},
		{
			id: 2,
			player: {
				name: "Sexy",
			},
		},
	]);

	const handleClick = () => {
		setGame(game[0].id === 1 ? [game[1], game[0]] : [game[0], game[1]]);
	};

	
	const handleClick = () => {
		setGame(
			game.map((item) =>
				item.id === 1
					? { ...item, player: { ...item.player, name: "Random" } }
					: item
			)
		);

		setGame(
    produce((draft) => {

        const names = draft.find((names) => bug.id === 1);
        if (bug) bug.fixed = true;

    }

	return (
		<div>
			<button onClick={handleClick}>Swap Players</button>
			
			{game.map((item) => (
				<div key={item.id}>
					ID: {item.id}, Player: {item.player.name}
				</div>
			))}
		</div>
	);
};
export default App;


import React, { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
	const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
	

	return (
		<div>
			<NavBar cartItemsCount={cartItems.length} />
			<Cart cartItems={cartItems} onClear={() => setCartItems([])} />
		</div>
	);
}

export default App;

	

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
