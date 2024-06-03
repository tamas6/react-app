import Alert from "./Alert";
interface Props {
	children: string;
	color?: "primary" | "secondary" | "danger";
	Onclick: () => void;
}
export const Button = ({ children, color = "primary", Onclick }: Props) => {
	return (
		<>
			<button type="button" className={"btn btn-" + color} onClick={Onclick}>
				{children}
			</button>
		</>
	);
};
