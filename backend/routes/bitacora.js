var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Bitacora = require('../models/bitacora');

//enable cors
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.route("/")
.get(function(req,res) {
	Bitacora.find({},function(err,bitacoras) {
		if (err) {res.redirect("/");return;}
		console.log(bitacoras)
		res.send(bitacoras)
	});
})

.post(function(req,res){
	var newBitacora = new Bitacora({
		preparacion:  req.body.preparacion,
		riego:req.body.riego,
		desmalezado:  req.body.desmalezado,
		plaga: req.body.plaga,
		crecimiento: req.body.crecimiento,
		clima:  req.body.clima,
		fotografias: req.body.fotografias,
		reflexion: req.body.reflexion,
		user_id : res.locals.user._id
	});	
	Bitacora.createBitacora(newBitacora, function(err, bitacora){
		if(err) throw err;
		console.log(bitacora);
	});
});

router.route('/:_id')
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
        if (req.body.user_id) user.user_id = req.body.user_id;

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