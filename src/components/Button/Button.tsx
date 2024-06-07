import styles from "./Button.module.css";
interface Props {
	children: string;
	color?: "primary" | "secondary" | "danger";
	Onclick: () => void;
}
export const Button = ({ children, color = "primary", Onclick }: Props) => {
	return (
		<>
			<button
				type="button"
				className={[styles.btn, ["btn" + color]].join(" ")}
				onClick={Onclick}
			>
				{children}
			</button>
			<button className={styles.btn} type="button"></button>
		</>
	);
};
