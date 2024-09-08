import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Titulo.module.css'; // Opcional: para estilos adicionais

const Titulo = () => {
    const navigate = useNavigate();
    const handlePaginaInicial = () => {
        navigate('/');
    };

    return (
        <div className={styles.home}>
            <div className={styles.colunaEsquerda}>
                <p className={styles.tituloUm}>UTD: Desenvolvimento de Interfaces Web com Javascript</p>
                <p className={styles.tituloDois}>aluno: PAULO SÉRGIO FERREIRA DE SOUSA</p>
            </div>
            <div className={styles.colunaDireita}>
                <button className={styles.paginaInicial} onClick={handlePaginaInicial}>Página inicial</button>
            </div>
        </div>
    );
};

export default Titulo;
