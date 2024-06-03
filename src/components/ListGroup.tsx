import { MouseEvent, useState } from "react";

interface Props {
	items: string[];
	heading: string;
	OnSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, OnSelectItem }: Props) {
	// HOOK

	const [selectedIndex, setSelectedIndex] = useState(-1);

	// Method1
	const message = items.length === 0 ? <p>No item found</p> : null;
	// Method2
	/*const getMessage = () => {
		return items.length === 0 ? <p>No item found</p> : null;
	};*/
	// Event Handler

	// const handleClick = (event: MouseEvent) => console.log(event);
	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No item found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
							OnSelectItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}
export default ListGroup;
