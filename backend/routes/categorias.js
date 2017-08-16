var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Categoria = require('../models/categorias');

//enable cors
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.route("/")
.get(function(req,res) {
	Categoria.find(
		{},function(err,categorias) {
		if (err) {res.redirect("/");return;}
		console.log(categorias)
        res.send(categorias);
	});
})
.post(function(req, res){
	var nombre = req.body.nombre;

	var newCategoria = new Categoria({
		nombre: nombre
	});	
	Categoria.createCategoria(newCategoria, function(err, categoria){
		if(err) throw err;
		console.log(categoria);
	});
});

router.route('/:_id')
.put( function (req, res) {
    Categoria.findById(req.params._id, function (err, user) {
        if (err) res.send(err);

        if (req.body.nombre) user.nombre = req.body.nombre;

        user.save( function (err){
            if (err) send (err);
            res.json({message: 'Categoria updated'});
        });
    });
})
.delete( function (req, res) {
    Categoria.remove({
        _id: req.params._id
    }, function (err, user) {
        if (err) return res.send(err);
        res.json({ message: 'Deleted' });
    });
});
module.exports = router;