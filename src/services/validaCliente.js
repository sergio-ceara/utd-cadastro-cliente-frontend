// src/services/validaCliente.js
import { mensagemGeral } from './mensagemGeral';

export function validaCliente(titulo, cliente) {
    let vetorMensagem = [];
    let avisoMensagem = '';

    if (!cliente.nome) {
        vetorMensagem.push("nome");
    }
    if (!cliente.idade) {
        vetorMensagem.push("idade");
    }
    if (!cliente.email) {
        vetorMensagem.push("email");
    }

    if (vetorMensagem.length > 0) {
        avisoMensagem = vetorMensagem.length === 1 ? 'Ajuste o campo para gravar:' : 'Ajuste os campos para gravar:';
        vetorMensagem.unshift(avisoMensagem)
        mensagemGeral(titulo, vetorMensagem)
        return false; // Indica que a validação falhou
    }

    return true; // Indica que a validação foi bem-sucedida
}
