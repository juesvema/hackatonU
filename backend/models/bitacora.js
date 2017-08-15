var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Product = mongoose.model('Product');
var User = mongoose.model('User');

var Bitacora_schema = mongoose.Schema({
	preparacion: {
		type: Boolean
	},
	riego: {
		type: Boolean
	},
	desmalezado: {
		type: Boolean
	},
	plaga: {
		type: String
	},
	crecimiento: {
		type: String
	},
	clima: {
		type: String
	},
	fotografias: {
		type: String
	},
	reflexion: {
		type: String	
	},
	product_id: {
		type: Schema.Types.ObjectId, ref: "Product"	
	},
	user_id: {
		type: Schema.Types.ObjectId, ref: "User"		
	}
});

var Bitacora = module.exports = mongoose.model('Bitacora', Bitacora_schema);

module.exports.createBitacora = function(newBitacora, callback){
      newBitacora.save(callback);
}
