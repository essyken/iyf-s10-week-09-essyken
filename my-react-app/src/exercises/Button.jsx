// components/Button.jsx
import styles from './Button.module.css';

function Button({ variant = 'primary', children, ...props }) {
    return (
        <button 
            className={`${styles.button} ${styles[variant]}`}
            {...props}
        >
            {children}
        </button>
    );
}