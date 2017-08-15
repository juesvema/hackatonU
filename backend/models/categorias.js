var mongoose = require('mongoose');


var Categorias = mongoose.Schema({
	nombre: {
		type: String,
		index:true
	}
});

var Categoria = mongoose.model('Categoria', Categorias);

var raiz = {
	nombre: "Raiz"
}

var tierra = {
	nombre: "Tierra"
}

var aromatica = {
	nombre: "Planta Aromatica"
}

var raiz = new Categoria(raiz);
var tierra = new Categoria(tierra);
var aromatica = new Categoria(aromatica);

raiz.save(function(err){
   console.log(raiz)
});
tierra.save(function(err){
   console.log(tierra)
});
aromatica.save(function(err){
   console.log(aromatica)
});
module.exports = Categoria;