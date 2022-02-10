import styles from './SubmitButton.module.css'

export default ({text}) => {
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}