var mongoose = require('mongoose');

var Categorias = mongoose.Schema({
	nombre: {
		type: String,
		index:true
	}
});

var Categoria = module.exports = mongoose.model('Categoria', Categorias);

module.exports = Categoria;