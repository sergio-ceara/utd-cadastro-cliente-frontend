import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getClientes, removeCliente } from "../../services/cliente-requests";
import { FaTrash, FaEdit } from 'react-icons/fa';
import styles from './ViewCliente.module.css';
import { confirmacaoGeral } from '../../services/confirmacaoGeral'; // ajuste o caminho conforme necessário

function ViewCliente() {
    const navigate = useNavigate();
    const handleIncluirCliente = () => {
        navigate('/cliente');
    };

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        carregaClientes();
    }, []);

    const carregaClientes = async () => {
        const clientesResponse = await getClientes();
        setClientes(await clientesResponse.data);
        console.log(clientes);
    };

    const deleteCliente = async (id) => {
        const cliente = clientes.find(cliente => cliente.id === id); // Encontra o cliente pelo ID
        const confirmarExclusao = (confirmed) => {
            if (confirmed) {
                removeCliente(id)
                    .then(() => {
                        setClientes(clientes.filter(cliente => cliente.id !== id));
                    })
                    .catch(err => {
                        console.error('Erro ao excluir cliente:', err);
                    });
            }
        };
        confirmacaoGeral("Cadastro de cliente", `Você tem certeza que deseja excluir o cliente ${cliente.nome}?`, confirmarExclusao);
    };

    return (
        <>
        <div className={styles.botaoIncluirInicio}>
            <button className={styles.incluirCliente} onClick={handleIncluirCliente}>Incluir cliente</button>
        </div>
        <div className={styles.container}>
            {/* Adiciona a classe 'table' para aplicar os estilos CSS adequados */}
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.id}>id</th>
                        <th className={styles.nome}>nome</th>
                        <th className={styles.idade}>idade</th>
                        <th className={styles.email}>email</th>
                        <th className={styles.edicao}>edição</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td className={styles.id} data-label="Id">{cliente.id}</td>
                            <td className={styles.nome} data-label="Nome">{cliente.nome}</td>
                            <td className={styles.idade} data-label="Idade">{cliente.idade}</td>
                            <td className={styles.email} data-label="email">{cliente.email}</td>
                            <td className={styles.edicao}>
                                <Link to={`../edit/${encodeURIComponent(cliente.id)}`}>
                                    <button className={styles.iconButton} title="Alterar"><FaEdit /></button>
                                </Link>
                                <button onClick={() => deleteCliente(cliente.id)} className={styles.iconButton} title="Excluir"><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default ViewCliente;
