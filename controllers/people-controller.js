const express = require('express');
const router = express.Router();
const { People } = require('../models')

///////////////////////////////
// ROUTES
////////////////////////////////
// Index Route
router.get('/', async (req, res) => {
    try {
        res.status(200).json(await People.find({}));
    } catch(err) {
        console.log(err);
    }
})
// Create Route
router.post('/', async (req, res) => {
    try {
        res.status(201).json(await People.create(req.body));
    } catch (err) {
        console.log(err);
    }
})
// Show Route
router.get('/:id', async (req, res) => {
    try{
        res.status(201).json(await People.findById(req.params.id))
    }catch{

    }
})
// Put Route 
router.put('/:id', async (req, res) => {
    try{
        res.status(200).json(await People.findByIdAndUpdate(req.params.id, req.body, {new:true})
        )
    }catch(error){
        res.status(400).json(error)
    }
})
// Delete Route
router.delete('/:id', async (req, res) => {
    try{
        res.status(200).json(await People.findByIdAndRemove(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})




module.exports = router;
