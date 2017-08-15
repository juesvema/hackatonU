var mongoose = require('mongoose');

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
	}
	product_id: {
		type: Schema.ObjectId, ref: "Product"	
	}
	user_id: {
		type: Schema.ObjectId, ref: "User"		
	}
});

var Bitacora = module.exports = mongoose.model('Bitacora', Bitacora_schema);

module.exports.createBitacora = function(newBitacora, callback){
      newBitacora.save(callback);
}
