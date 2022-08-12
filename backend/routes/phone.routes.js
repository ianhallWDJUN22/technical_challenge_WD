const { router } = require('../../app');

router = require('express').Router();


router.get('/phone/:phoneId', (req, res, next) => {
    const { phoneId } = req.params;

    Phone.findById(phoneId)
    .then(phone => {
        res.status(200).json(phone)
    })
})

