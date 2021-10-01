const express = require('express');
const router = require.Router(); 

//
router.get('/', (req, res, next) => { 
    res.status(200).send({
        message = 'Usando o GET dentro da rotas de produtos'
    });   
});

router.post('/', (req, res, next) => { 
    res.status(201).send({
        message = 'Usando o POST dentro da rotas de produtos'
    });   
});

module.exports = router;
