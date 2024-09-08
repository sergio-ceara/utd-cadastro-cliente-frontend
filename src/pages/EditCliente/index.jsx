import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editCliente, getCliente } from '../../services/cliente-requests';
import styles from './EditCliente.module.css';
import {validaCliente} from '../../services/validaCliente';

function EditCliente() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        id: '',
        nome: '',
        idade: '',
        email: ''
    });

    useEffect(() => {
        buscaCliente(id);
    }, []);

    const buscaCliente = async (id) => {
        const clienteDados = await (await getCliente(id)).data;
        console.log(clienteDados);
        setCliente(clienteDados);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'idade' && !/^\d*$/.test(value)) {
            return; // Impede a atualização do estado se o valor não for numérico
        }        
        setCliente((clienteAnterior) => {
            return {
                ...clienteAnterior,
                [name]: value
            };
        });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    };

    const editarCliente = async (event) => {
        event.preventDefault();
        console.log('cliente alteração:',cliente);
        if (!validaCliente("Cadastro de cliente",cliente)) {
            return
        }
        await editCliente(cliente);
        navigate('/cliente/view');
    };

    const handleCancel = () => {
        navigate('/cliente/view');
    };

    return (
        <div className={styles.container}>
            <h1>Alteração de cliente</h1>
            <form onSubmit={editarCliente}>
                <label>id</label>
                <input className={styles.readOnly}
                    type="text"
                    name='id'
                    value={cliente.id}
                    onChange={handleChange} readOnly />
                <label>nome</label>
                <input
                    type="text"
                    name='nome'
                    value={cliente.nome}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}/> 
                <label>idade</label>
                <input
                    type="text"
                    name='idade'
                    value={cliente.idade}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange} 
                    pattern="\d*"
                    title="Por favor, insira apenas números."                    
                />
                <label>email</label>
                <input 
                    type="email"
                    name='email'
                    value={cliente.email}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange} />
                <div className={styles.buttonGroup}>
                    <button type='submit'>Gravar</button>
                    <button type='button' className={styles.buttonCancel} onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default EditCliente;
