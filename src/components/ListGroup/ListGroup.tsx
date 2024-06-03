import { MouseEvent, useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
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
			<ul className={[styles.listGroup, styles.container].join(" ")}>
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
							onSelectItem(item);
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
