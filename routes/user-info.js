const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        "name": process.env[`NAME_${id}`],
        "lastName": process.env[`LASTNAME_${id}`],
        "email": process.env[`EMAIL_${id}`],
        "id": process.env[`ID_${id}`]
    });
});

module.exports = router;