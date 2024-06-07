import { MouseEvent, useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
	list-style: none;
	padding: 0;
`;

interface ListItemProps {
	active: boolean;
}
const ListItem = styled.li<ListItemProps>`
	padding: 5px 0;
	background: ${(props) => (props.active ? "blue" : "false")};
`;

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
			<List className={[styles.listGroup, styles.container].join("")}>
				{items.map((item, index) => (
					<ListItem
						active={index === selectedIndex}
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
					</ListItem>
				))}
			</List>
		</>
	);
}
export default ListGroup;
