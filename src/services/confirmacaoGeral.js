import './confirmacaoGeral.css';

export function confirmacaoGeral(titulo, message, callback) {
  // Cria um elemento div para o modal
  const modal = document.createElement('div');
  modal.className = 'modalConfirmacao';

  // Cria um contêiner para o título
  const tituloContainer = document.createElement('div');
  tituloContainer.className = 'tituloConfirmacaoContainer';

  const tituloConfirmacao = document.createElement('p');
  tituloConfirmacao.textContent = titulo;
  tituloConfirmacao.className = 'tituloConfirmacao'
  tituloContainer.appendChild(tituloConfirmacao);
  modal.appendChild(tituloContainer);

  // Cria um contêiner para pergunta
  const perguntaContainer = document.createElement('div');
  perguntaContainer.className = 'perguntaContainer';
  
  // Adiciona a mensagem ao modal
  const messageElem = document.createElement('p');
  messageElem.textContent = message;
  perguntaContainer.appendChild(messageElem);
  modal.appendChild(perguntaContainer);
  
  // Cria um contêiner para os botões
  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'botoesPerguntaContainer';
  
  // Adiciona um botão de Sim
  const yesButton = document.createElement('button');
  yesButton.textContent = 'Sim';
  yesButton.className = 'yesButton'
  yesButton.onclick = () => {
    document.body.removeChild(modal);
    callback(true);
  };
  buttonsContainer.appendChild(yesButton);
  
  // Adiciona um botão de Não
  const noButton = document.createElement('button');
  noButton.textContent = 'Não';
  noButton.className = 'noButton'
  noButton.onclick = () => {
    document.body.removeChild(modal);
    callback(false);
  };
  buttonsContainer.appendChild(noButton);
  
  // Adiciona o contêiner de botões ao modal
  modal.appendChild(buttonsContainer);
  
  // Adiciona o modal ao corpo do documento
  document.body.appendChild(modal);
}