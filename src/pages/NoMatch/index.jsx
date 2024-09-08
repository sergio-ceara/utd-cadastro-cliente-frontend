import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NoMatch.module.css';

function NoMatch() {
  return (
    <div className={styles.containerNoMatch}>
      <label className={styles.linha1NoMatch}>404 - Página Não Encontrada</label>
      <label className={styles.linha2NoMatch}>A página que você está procurando não existe.</label>
      <Link to="/" className={styles.linha3NoMatch}>Clique aqui para ir para a página inicial.</Link>
    </div>
  );
}

export default NoMatch;
