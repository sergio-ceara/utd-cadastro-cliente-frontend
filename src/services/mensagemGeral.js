import './mensagemGeral.css';

export function mensagemGeral(titulo, vetorMensagem) {
  // Cria um elemento div para o modal
  const modal = document.createElement('div');
  modal.className = 'modalMensagem';

  // Cria um contêiner para o título
  const tituloContainer = document.createElement('div');
  tituloContainer.className = 'tituloMensagemContainer';

  const tituloMensagem = document.createElement('p');
  tituloMensagem.textContent = titulo;
  tituloMensagem.className = 'tituloMensagem'
  tituloContainer.appendChild(tituloMensagem);
  modal.appendChild(tituloContainer);

  // Cria um contêiner para a mensagem
  const mensagemContainer = document.createElement('div');
  mensagemContainer.className = 'mensagem-container';
  
  for (const mensagem of vetorMensagem) {
    // Adiciona a mensagem ao modal
    const messageElem = document.createElement('p');
    messageElem.className = 'pMensagem';
    messageElem.textContent = mensagem;
    mensagemContainer.appendChild(messageElem);
  }
  modal.appendChild(mensagemContainer);
  
  // Cria um contêiner para o botão
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'buttonMensagemContainer';
  
  // Adiciona um botão de OK
  const okButton = document.createElement('button');
  okButton.textContent = 'OK';
  okButton.className = 'okButton';
  okButton.onclick = () => {
    document.body.removeChild(modal);
  };
  buttonContainer.appendChild(okButton);
  
  // Adiciona o contêiner do botão ao modal
  modal.appendChild(buttonContainer);
  
  // Adiciona o modal ao corpo do documento
  document.body.appendChild(modal);
}
