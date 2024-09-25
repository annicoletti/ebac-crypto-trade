const mongoose = require('mongoose');

const UsuarioSchema = require('./usuario');

const UsuarioEntity = mongoose.model('Usuario', UsuarioSchema);

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URL);
}

module.exports = {
  connect,
  UsuarioEntity,
}
