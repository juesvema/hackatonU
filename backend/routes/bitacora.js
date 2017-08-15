var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Bitacora = require('../models/bitacora');

router.route("/bitacora")
.get(function(req,res) {
	Bitacora.find({},function(err,bitacoras) {
		if (err) {res.redirect("/");return;}
		console.log(bitacoras)
		res.send(bitacoras)
	});
})

.post(function(req, res){
	var preparacion = req.body.preparacion;
	var riego = req.body.riego;
	var desmalezado = req.body.desmalezado;
	var plaga = req.body.plaga;
	var crecimiento = req.body.crecimiento;
	var clima = req.body.clima;
	var fotografias = req.body.fotografias;
	var reflexion = req.body.reflexion;

	var newBitacora = new Bitacora({
		preparacion: preparacion,
		riego:riego,
		desmalezado: desmalezado,
		plaga: plaga,
		crecimiento: crecimiento,
		clima: clima,
		fotografias: fotografias,
		reflexion: reflexion
	});	
	Bitacora.createBitacora(newBitacora, function(err, bitacora){
		if(err) throw err;
		console.log(bitacora);
	});
});

router.route('/bitacora/:_id')
.put( function (req, res) {
    Bitacora.findById(req.params._id, function (err, user) {
        if (err) res.send(err);

        if (req.body.preparacion) user.preparacion = req.body.preparacion;
        if (req.body.riego) user.riego = req.body.riego;
        if (req.body.desmalezado) user.desmalezado = req.body.desmalezado;
        if (req.body.plaga) user.plaga = req.body.plaga;
        if (req.body.crecimiento) user.crecimiento = req.body.crecimiento;
        if (req.body.clima) user.clima = req.body.clima;
        if (req.body.fotografias) user.fotografias = req.body.fotografias;
        if (req.body.reflexion) user.reflexion = req.body.reflexion;

        user.save( function (err){
            if (err) send (err);
            res.json({message: 'User updated'});
        });
    });
})
.delete( function (req, res) {
    Bitacora.remove({
        _id: req.params._id
    }, function (err, user) {
        if (err) return res.send(err);
        res.json({ message: 'Deleted' });
    });
});

module.exports = router;