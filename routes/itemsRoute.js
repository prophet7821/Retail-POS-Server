const express = require('express');
const itemModel = require('../models/itemsModel');
const router = express.Router();

router.get('/get-all-items', async (req, res)=>{
    try{
        const items = await itemModel.find();
        res.send(items);
    }catch(error){
        res.status(400).json(error);
    }
});
router.post('/add-item', async (req, res)=>{
    try{
        const newItems = new itemModel(req.body);
        await newItems.save();
        res.send("Item added succesfully");
    }catch(error){
        res.status(400).json(error);
    }
});

module.exports = router;