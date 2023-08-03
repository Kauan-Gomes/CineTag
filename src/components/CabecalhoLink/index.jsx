import styles from './CabecalhoLink.module.css'
import { Link } from 'react-router-dom'

export default function CabecalhoLink({ url, children }) {
    return (
        //link serve como ancoragem , 'to' é o caminho pra seguir
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}
