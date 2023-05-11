import styles from "./Title.module.css"

export default function Title({ title, description }) {
	return (
		<div className={styles.Title}>
			<h1>{title}</h1>
			<div className={styles.Divider} />
			<span>{description}</span>
		</div>
	)
}