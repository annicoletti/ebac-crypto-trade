const { UsuarioEntity } = require('../models')
const bcrypt = require('bcrypt');

const criaUsuario = async (usuario) => {

    if (!usuario.senha) {
        throw new Error('O campo senha é obrigatório');
    }

    if (usuario.senha.lenght <= 4) {
        throw new Error('O campo senha tem que ter no minimo 5 caracteres');
    }

    const hashSenha = await bcrypt.hash(usuario.senha, 10);
    usuario.senha = hashSenha;

    const usuarioSalvo = await UsuarioEntity.create(usuario);

    //._doc - do mongoose faz retornar um dicionario
    // destruct do dicionario, separando campo senha e compondo o restante na outra variável
    const { senha, ...usuarioResponse } = usuarioSalvo._doc;


    return usuarioResponse;
}


module.exports = criaUsuario