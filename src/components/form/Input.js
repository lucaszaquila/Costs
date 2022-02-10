import styles from './Input.module.css'

export default ({type, text, name, placeholder, handleOnChange, value, id}) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name} 
                id={id} 
                onChange={handleOnChange}
                placeholder={placeholder} 
                value={value}
            />
        </div>
    )
}