const express = require('express');
const Gasto = require('../models/gastos');
const router = express.Router();
router.get('/', (req, res) => {

    res.json({ status: 'API works' });
})
const gastosController = {

    getGastos : (req, res) => {
        res.json({ status: 'Listado Gastos ' });
    },
    createGastos: function () {
    },
    getGasto : function () {

    },
    editGasto : function () {

    },
    deleteGasto : function () {
    },
    getGastos : async (req, res) => {
        const gastos = await Gasto.find();
        res.json(gastos);

    },
    createGastos : async (req, res) => {
        const gasto = new Gasto(req.body);
        console.log(gasto);
        await gasto.save();
        res.json('status: Gasto guardado');
    },
    getGasto : async (req, res) => {
        console.log(req.params.id);
        const gasto = await Gasto.findById(req.params.id);
        res.json(gasto);
    },
    editGasto : async (req, res) => {
        const { id } = req.params;
        const gasto = {
            tipo: req.body.tipo,
            ruc: req.body.ruc,
            empresa: req.body.empresa,
            monto: req.body.monto
        };
        await Gasto.findByIdAndUpdate(id, { $set: gasto }, { new: true });
        res.json('status: Gasto actualizado');
    }
};


module.exports = gastosController;