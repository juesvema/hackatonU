var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Categoria = require('../models/categorias');

router.route("/categorias")
.get(function(req,res) {
	Categoria.find(
		{},function(err,categorias) {
		if (err) {res.redirect("/");return;}
		console.log(categorias)
	});
})
module.exports = router;