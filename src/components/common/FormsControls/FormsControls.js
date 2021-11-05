import styles from "./FormsControls.module.css" 

export const Textarea = ({input, meta, ...props}) => { 
    const hasError = meta.error && meta.touched 

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => { 
    const hasError = meta.error && meta.touched 

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <input {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}