var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var Product = require('../models/product');



// 
router.route("/productos")
.get(function(req,res) {
	Product.find({},function(err,products) {
		if (err) {res.redirect("/");return;}
		console.log(products)
		res.send(products)
	});
})

.post(function(req,res){
		var newProduct = new Product({
			title: req.body.title,
			category_id:req.body.category_id
		});
		Product.createProduct(newProduct, function(err, product){
			if(err) throw err;
			console.log(product);
			console.log("Guardamos el producto exitosamente")
			 res.json({message: 'Product save'});
		});
})

router.route("/productos/:id")
.get(function(req,res) {
	res.render("/productos/show")
})
.put( function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) res.send(err);
        if (req.body.title) product.title = req.body.title;
		if (req.body.category_id) product.category_id = req.body.category_id;
        product.save( function (err){
            if (err) send (err);
            res.json({message: 'Product updated'});
        });
    });
})
.delete(function(req,res) {
	Product.findOneAndRemove({_id: req.params.id},function(err) {
		if(!err){
			console.log("Producto eliminado");
			res.redirect("/productos");
		}
		else {
			console.log(err);
			res.redirect("/productos"+req.params.id);
		}
	});
});

   module.exports = router;