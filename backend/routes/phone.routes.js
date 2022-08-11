const { router } = require('../../app');

router = require('express').Router();


router.get('/phone/:phoneId', (req, res, next) => {
    const { phoneId } = req.params;

    phoneId.findById(phoneId)
    .then(phone => {
        res.status(200).json(phone)
    })
})

router.get('/phones')