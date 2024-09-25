const express = require('express');
const { criaUsuario } = require('../../services')
const { logger } = require('../../utils');

const router = express.Router();


router.post('/', async (req, res) => {

    const dados = req.body.usuario;

    try {
        const usuario = await criaUsuario(dados);

        res.json({
            sucesso: true,
            usuario,
        })
    } catch (error) {
        logger.error(`Erro na criação do usuário ${error.message}`)
        res.status(422).json({
            sucesso: false,
            erro: error.message,
        })
    }

})


module.exports = router;