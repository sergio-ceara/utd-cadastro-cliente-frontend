import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { addCliente } from '../../services/cliente-requests';
import styles from './AddCliente.module.css';
import {validaCliente} from '../../services/validaCliente';

function AddCliente(){
 
    const navigate = useNavigate();

    const [cliente,setCliente] = useState({
        nome:'',
        idade:'',
        email:''
    });

    const handleChange = (event) =>{
        const {name,value} = event.target;
        if (name === 'idade' && !/^\d*$/.test(value)) {
            return; // Impede a atualização do estado se o valor não for numérico
        }        
        setCliente((clienteAnterior)=>{
            return {
                ...clienteAnterior,
                [name]:value
            }
        }
        );
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    };

    const salvaCliente = async (event) =>{
        event.preventDefault();
        console.log("cliente inclusão:",cliente);
        if (!validaCliente("Cadastro de cliente",cliente)) {
            return
        }
        await addCliente(cliente);
        navigate('/cliente/view');
    }
    
    const handleCancel = () => {
        navigate('/cliente/view');
    };

    return(
        <>
        <div className={styles.container}>
        <h1>Incluir cliente</h1>
            <form onSubmit={salvaCliente}>
                <label>nome</label>
                <input 
                    type="text"
                    name='nome'
                    value={cliente.nome}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} />
                <label>idade</label>
                <input 
                    type="text"
                    name='idade'
                    value={cliente.idade}
                    onChange={handleChange} 
                    onKeyDown={handleKeyDown}
                    pattern="\d*"
                    title="Por favor, insira apenas números."                    
                />

                <label>email</label>
                <input 
                type="email"
                name='email'
                value={cliente.email}
                onChange={handleChange} 
                onKeyDown={handleKeyDown}
                />
                <div className={styles.buttonGroup}>
                    <button type='submit'>Gravar</button>
                    <button type='button' className={styles.buttonCancel} onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default AddCliente;
