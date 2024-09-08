import styles from './Home.module.css';
import { FaUser } from 'react-icons/fa';
//import { baseURL } from '../../services/api'; // Importar a URL base
import { baseFront } from '../../services/api'; // Importar a URL base
//<a href="http://localhost:5173/cliente/view" className={styles.link}>Cadastro de clientes</a>
//<a href={`${baseFront}/cliente/view`} className={styles.link}>Cadastro de clientes</a>
//<a href="http://192.168.3.10:5173/cliente/view" className={styles.link}>Cadastro de clientes</a>
function Home() {
    return (
        <>
            <div className={styles.cliente}>
                <div className={styles.linkContainer}>
                        <label>
                            <FaUser className={styles.icon}/>
                            <a href={`${baseFront}/cliente/view`} className={styles.link}>Cadastro de clientes</a>
                        </label>
                </div>            
            </div>
        </>
    );
}

export default Home;