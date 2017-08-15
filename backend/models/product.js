var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var Product_schema = mongoose.Schema({
	title: {type:String,require:true},
	category_id: {type:String,require:true}
});

var Product = module.exports = mongoose.model("Product",Product_schema);

module.exports.createProduct = function(newProduct, callback){
      newProduct.save(callback);
}